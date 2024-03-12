import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientQuestionTrackerService } from './patient-question-tracker.service';
import { CreatePatientQuestionTrackerDto } from './dto/create-patient-question-tracker.dto';
import { UpdatePatientQuestionTrackerDto } from './dto/update-patient-question-tracker.dto';

@Controller('patient-question-tracker')
export class PatientQuestionTrackerController {
  constructor(private readonly trackerService: PatientQuestionTrackerService) {}

  @Post()
  create(@Body() data: any) {
    return this.trackerService.create(data);
  }

  @Get()
  findAll(){
    return this.trackerService.findAll();
  }

  @Get(':patientId')
  findByPatientId(@Param('patientId') patientId: number) {
    return this.trackerService.findByPatientId(patientId);
  }

  @Get(':questionId/:sectionId')
  findByQuestionAndSection(@Param('questionId') questionId: number, @Param('sectionId') sectionId: number) {
    return this.trackerService.findByQuestionAndSection(questionId, sectionId);
  }

  // @Patch(':id')
  // update(@Param('id') id: number, @Body() data: any) {
  //   return this.trackerService.update(id, data);
  // }
}
