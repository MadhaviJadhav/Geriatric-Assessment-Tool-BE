import { Injectable } from '@nestjs/common';
import { CreatePatientQuestionTrackerDto } from './dto/create-patient-question-tracker.dto';
import { UpdatePatientQuestionTrackerDto } from './dto/update-patient-question-tracker.dto';
import { PatientQuestionTracker } from './entities/patient-question-tracker.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PatientQuestionTrackerService {
  constructor(@InjectRepository(PatientQuestionTracker) private readonly trackerRepository: Repository<PatientQuestionTracker>,){}

  async create(data: any): Promise<PatientQuestionTracker> {
    return this.trackerRepository.save(data);
  }

  async findAll(){
    return this.trackerRepository.find();
  }
  async findByPatientId(patientId: number): Promise<PatientQuestionTracker[]> {
    return this.trackerRepository.find({ where: { patient: { id: patientId } } });
  }

  async findByQuestionAndSection(questionId: number, sectionId: number): Promise<PatientQuestionTracker | undefined> {
    return this.trackerRepository.findOne({ where: { question: { questionId: questionId }, sectionId: sectionId } });
  }

  // async update(id: number, data: any): Promise<PatientQuestionTracker> {
  //   await this.trackerRepository.update(id, data);
  //   return this.trackerRepository.findOne({id});
  // }
}
