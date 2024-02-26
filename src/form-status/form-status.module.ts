import { Module } from '@nestjs/common';
import { FormStatusService } from './form-status.service';
import { FormStatusController } from './form-status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormStatus } from './entities/form-status.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FormStatus])],
  controllers: [FormStatusController],
  providers: [FormStatusService],
})
export class FormStatusModule {}
