import { PartialType } from '@nestjs/mapped-types';
import { CreateFormStatusDto } from './create-form-status.dto';

export class UpdateFormStatusDto extends PartialType(CreateFormStatusDto) {}
