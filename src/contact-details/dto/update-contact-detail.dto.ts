import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDetailDto } from './create-contact-detail.dto';

export class UpdateContactDetailDto extends PartialType(CreateContactDetailDto) {}
