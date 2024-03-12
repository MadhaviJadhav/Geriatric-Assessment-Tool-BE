import { Module } from '@nestjs/common';
import { QuestionMasterService } from './question-master.service';
import { QuestionMasterController } from './question-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionMaster } from './entities/question-master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([QuestionMaster])],
  controllers: [QuestionMasterController],
  providers: [QuestionMasterService],
})
export class QuestionMasterModule {}
