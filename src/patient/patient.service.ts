import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PatientService {

  constructor(@InjectRepository(Patient) private patientRepository:Repository<Patient>){}
  
  create(createPatientDto:CreatePatientDto){
    const patient = this.patientRepository.create(createPatientDto);
    
    return this.patientRepository.save(patient)
  }

  async findAll() {
    return await this.patientRepository.find({
      relations:{
        contacts:true,
        forms:true
      }
    });
  }

  findOne(id: number) {
    return this.patientRepository.findOneBy({id});
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    const patient = await this.patientRepository.findOneBy({id});

  if (!patient) {
    return 'not found';
  }

  // Update the patient with the new data
  this.patientRepository.merge(patient, updatePatientDto);

  // Save the updated patient to the database
  const updatedPatient = await this.patientRepository.save(patient);

  // Return the updated patient or any other desired response
  return updatedPatient;
  }

  remove(id: number) {

    return this.patientRepository.delete(id);
  }


  
}
