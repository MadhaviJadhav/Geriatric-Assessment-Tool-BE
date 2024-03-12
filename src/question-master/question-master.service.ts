import { Injectable } from '@nestjs/common';
import { CreateQuestionMasterDto } from './dto/create-question-master.dto';
import { UpdateQuestionMasterDto } from './dto/update-question-master.dto';
import { QuestionMaster } from './entities/question-master.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuestionMasterService {

  constructor(
    @InjectRepository(QuestionMaster)
    private questionMasterRepository: Repository<QuestionMaster>,
  ) {}

  async findAll(): Promise<QuestionMaster[]> {
    return this.questionMasterRepository.find({ relations: ['section'] });
  }

  async findBySection(sectionId: number): Promise<QuestionMaster[]> {
    return this.questionMasterRepository.find({ where: { section: { sectionId: sectionId } }, relations: ['section'] });

    
  }

  async create(questionData: Partial<QuestionMaster>): Promise<QuestionMaster> {
    const question = this.questionMasterRepository.create(questionData);
    return this.questionMasterRepository.save(question);
  }

  // create(createQuestionMasterDto: CreateQuestionMasterDto) {
  //   return 'This action adds a new questionMaster';
  // }
  // findAll() {
  //   return `This action returns all questionMaster`;
  // }

  findOne(id: number) {
    return `This action returns a #${id} questionMaster`;
  }

  update(id: number, updateQuestionMasterDto: UpdateQuestionMasterDto) {
    return `This action updates a #${id} questionMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} questionMaster`;
  }
}
