import { Test, TestingModule } from '@nestjs/testing';
import { SectionMasterController } from './section-master.controller';
import { SectionMasterService } from './section-master.service';

describe('SectionMasterController', () => {
  let controller: SectionMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SectionMasterController],
      providers: [SectionMasterService],
    }).compile();

    controller = module.get<SectionMasterController>(SectionMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
