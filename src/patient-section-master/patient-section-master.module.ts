import { Module } from '@nestjs/common';
import { PatientSectionMasterService } from './patient-section-master.service';
import { PatientSectionMasterController } from './patient-section-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientSectionMaster } from './entities/patient-section-master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PatientSectionMaster])],
  controllers: [PatientSectionMasterController],
  providers: [PatientSectionMasterService],
})
export class PatientSectionMasterModule {}
