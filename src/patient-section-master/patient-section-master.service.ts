import { Injectable } from '@nestjs/common';
import { CreatePatientSectionMasterDto } from './dto/create-patient-section-master.dto';
import { UpdatePatientSectionMasterDto } from './dto/update-patient-section-master.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientSectionMaster } from './entities/patient-section-master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientSectionMasterService {
  constructor(@InjectRepository(PatientSectionMaster) private readonly trackerRepository: Repository<PatientSectionMaster>,){}

  async create(data: any): Promise<PatientSectionMaster> {
    return this.trackerRepository.save(data);
  }

  async findAll(){
    return this.trackerRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} patientSectionMaster`;
  }

  update(id: number, updatePatientSectionMasterDto: UpdatePatientSectionMasterDto) {
    return `This action updates a #${id} patientSectionMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientSectionMaster`;
  }
}
