import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@Controller('patient')
@ApiTags('Patient')
@ApiSecurity("JWT-Auth")
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post('')
  create(@Body(ValidationPipe) createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  @Get()
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    console.log(updatePatientDto)
    return this.patientService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(+id);
  }

  
}
