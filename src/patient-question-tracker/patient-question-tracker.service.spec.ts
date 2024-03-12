import { Test, TestingModule } from '@nestjs/testing';
import { PatientQuestionTrackerService } from './patient-question-tracker.service';

describe('PatientQuestionTrackerService', () => {
  let service: PatientQuestionTrackerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientQuestionTrackerService],
    }).compile();

    service = module.get<PatientQuestionTrackerService>(PatientQuestionTrackerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
