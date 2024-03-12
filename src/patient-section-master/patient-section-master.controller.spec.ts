import { Test, TestingModule } from '@nestjs/testing';
import { PatientSectionMasterController } from './patient-section-master.controller';
import { PatientSectionMasterService } from './patient-section-master.service';

describe('PatientSectionMasterController', () => {
  let controller: PatientSectionMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientSectionMasterController],
      providers: [PatientSectionMasterService],
    }).compile();

    controller = module.get<PatientSectionMasterController>(PatientSectionMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
