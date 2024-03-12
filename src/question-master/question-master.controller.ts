import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionMasterService } from './question-master.service';
import { CreateQuestionMasterDto } from './dto/create-question-master.dto';
import { UpdateQuestionMasterDto } from './dto/update-question-master.dto';
import { QuestionMaster } from './entities/question-master.entity';

@Controller('question-master')
export class QuestionMasterController {
  constructor(private readonly questionMasterService: QuestionMasterService) {}


  @Get()
  getAllQuestions() {
    return this.questionMasterService.findAll();
  }

  @Get('/:sectionId')
  getQuestionsBySection(@Param('sectionId') sectionId: string) {
    return this.questionMasterService.findBySection(Number(sectionId));
  }


  @Post()
  createQuestion(@Body() questionData: Partial<QuestionMaster>) {
    return this.questionMasterService.create(questionData);
  }

  // @Post()
  // create(@Body() createQuestionMasterDto: CreateQuestionMasterDto) {
  //   return this.questionMasterService.create(createQuestionMasterDto);
  // }

  @Get()
  findAll() {
    return this.questionMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionMasterDto: UpdateQuestionMasterDto) {
    return this.questionMasterService.update(+id, updateQuestionMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionMasterService.remove(+id);
  }
}
