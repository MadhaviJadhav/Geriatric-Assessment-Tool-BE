import { Module } from '@nestjs/common';
import { SectionMasterService } from './section-master.service';
import { SectionMasterController } from './section-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionMaster } from './entities/section-master.entity';
import { QuestionMaster } from 'src/question-master/entities/question-master.entity';


@Module({
  imports:[TypeOrmModule.forFeature([SectionMaster, QuestionMaster])],
  controllers: [SectionMasterController],
  providers: [SectionMasterService],
})
export class SectionMasterModule {}
