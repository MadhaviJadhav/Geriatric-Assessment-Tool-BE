import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDto } from './create-patient.dto';

export class UpdatePatientDto  {
  patientId: number;
  patientName: string;
  age: number;
  gender: string;
  consultingDate: Date;
  MRN: string;
  isCancerResearch: string;
  // uniqueToken: string;
  patientNo: string;
  trialId: string;
  GADoneBy: string[];
  isGeriatricICF: string;
  isCARGICF: string;
  reason: string;
  assessmentType: string;
  deviceAvailable: string[];
  socialMedia: string[];
  formCompleted: boolean;
}
