import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientSectionMasterDto } from './create-patient-section-master.dto';

export class UpdatePatientSectionMasterDto extends PartialType(CreatePatientSectionMasterDto) {}
