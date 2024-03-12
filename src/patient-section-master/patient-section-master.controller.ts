import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientSectionMasterService } from './patient-section-master.service';
import { CreatePatientSectionMasterDto } from './dto/create-patient-section-master.dto';
import { UpdatePatientSectionMasterDto } from './dto/update-patient-section-master.dto';

@Controller('patient-section-master')
export class PatientSectionMasterController {
  constructor(private readonly patientSectionMasterService: PatientSectionMasterService) {}

  @Post()
  create(@Body() data: any) {
    return this.patientSectionMasterService.create(data);
  }

  @Get()
  findAll(){
    return this.patientSectionMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientSectionMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientSectionMasterDto: UpdatePatientSectionMasterDto) {
    return this.patientSectionMasterService.update(+id, updatePatientSectionMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientSectionMasterService.remove(+id);
  }
}
