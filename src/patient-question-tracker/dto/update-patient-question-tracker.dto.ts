import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientQuestionTrackerDto } from './create-patient-question-tracker.dto';

export class UpdatePatientQuestionTrackerDto extends PartialType(CreatePatientQuestionTrackerDto) {}
