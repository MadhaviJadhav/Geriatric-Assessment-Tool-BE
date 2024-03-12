import { Test, TestingModule } from '@nestjs/testing';
import { PatientQuestionTrackerController } from './patient-question-tracker.controller';
import { PatientQuestionTrackerService } from './patient-question-tracker.service';

describe('PatientQuestionTrackerController', () => {
  let controller: PatientQuestionTrackerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientQuestionTrackerController],
      providers: [PatientQuestionTrackerService],
    }).compile();

    controller = module.get<PatientQuestionTrackerController>(PatientQuestionTrackerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
