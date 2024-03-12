import { Injectable } from '@nestjs/common';
import { CreateSectionMasterDto } from './dto/create-section-master.dto';
import { UpdateSectionMasterDto } from './dto/update-section-master.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SectionMaster } from './entities/section-master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SectionMasterService {

  constructor(@InjectRepository(SectionMaster) private sectionMasterRepository:Repository<SectionMaster>){}

  async create(sectionName: string): Promise<SectionMaster> {
    const section = this.sectionMasterRepository.create({ sectionName });
    return await this.sectionMasterRepository.save(section);
  }

  async findAll(): Promise<SectionMaster[]> {
    return this.sectionMasterRepository.find();
  }

  findOne(sectionId: number) {
    return this.sectionMasterRepository.findOneBy({sectionId});
  }

  update(id: number, updateSectionMasterDto: UpdateSectionMasterDto) {
    return `This action updates a #${id} sectionMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} sectionMaster`;
  }
}
