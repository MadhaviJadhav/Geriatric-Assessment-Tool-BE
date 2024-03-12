import { Test, TestingModule } from '@nestjs/testing';
import { PatientSectionMasterService } from './patient-section-master.service';

describe('PatientSectionMasterService', () => {
  let service: PatientSectionMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientSectionMasterService],
    }).compile();

    service = module.get<PatientSectionMasterService>(PatientSectionMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
