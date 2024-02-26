import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { ContactDetail } from 'src/contact-details/entities/contact-detail.entity';
import { FormStatus } from 'src/form-status/entities/form-status.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Patient, ContactDetail, FormStatus])],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
