import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {

  constructor(@InjectRepository(Doctor) private doctorRespository:Repository<Doctor>){}
  create(createDoctorDto: CreateDoctorDto) {
    const doctor =  this.doctorRespository.create(createDoctorDto);
    return this.doctorRespository.save(doctor)
  }

  findAll() {
    return this.doctorRespository.find();
  }

  findByDoctorId(doctorId:string){
    return this.doctorRespository.findOne({where:{doctorId:doctorId}})
  }
  findOne(id: number) {
    return this.doctorRespository.findOneBy({id});
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return this.doctorRespository.update(id, updateDoctorDto);
  }

  remove(id: number) {
    return `This action removes a #${id} doctor`;
  }
}
