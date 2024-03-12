import { PartialType } from '@nestjs/mapped-types';
import { CreateSectionMasterDto } from './create-section-master.dto';

export class UpdateSectionMasterDto extends PartialType(CreateSectionMasterDto) {}
