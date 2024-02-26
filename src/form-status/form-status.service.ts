import { Injectable } from '@nestjs/common';
import { CreateFormStatusDto } from './dto/create-form-status.dto';
import { UpdateFormStatusDto } from './dto/update-form-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FormStatus } from './entities/form-status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FormStatusService {
  
  constructor(@InjectRepository(FormStatus) private formRepository:Repository<FormStatus>){}

  create(createFormStatusDto: CreateFormStatusDto) {
    const form =  this.formRepository.create(createFormStatusDto);
    return this.formRepository.save(form);
  }

  findAll() {
    return this.formRepository.find({
      relations:{
        patient:true
      }
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} formStatus`;
  // }

  update(id: number, updateFormStatusDto: UpdateFormStatusDto) {
    return this.formRepository.update(id, updateFormStatusDto);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} formStatus`;
  // }
}
