import { Test, TestingModule } from '@nestjs/testing';
import { SectionMasterService } from './section-master.service';

describe('SectionMasterService', () => {
  let service: SectionMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SectionMasterService],
    }).compile();

    service = module.get<SectionMasterService>(SectionMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
