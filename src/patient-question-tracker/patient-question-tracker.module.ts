import { Module } from '@nestjs/common';
import { PatientQuestionTrackerService } from './patient-question-tracker.service';
import { PatientQuestionTrackerController } from './patient-question-tracker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientQuestionTracker } from './entities/patient-question-tracker.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PatientQuestionTracker])],
  controllers: [PatientQuestionTrackerController],
  providers: [PatientQuestionTrackerService],
})
export class PatientQuestionTrackerModule {}
