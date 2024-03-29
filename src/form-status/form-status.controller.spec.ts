import { Test, TestingModule } from '@nestjs/testing';
import { FormStatusController } from './form-status.controller';
import { FormStatusService } from './form-status.service';

describe('FormStatusController', () => {
  let controller: FormStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormStatusController],
      providers: [FormStatusService],
    }).compile();

    controller = module.get<FormStatusController>(FormStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
