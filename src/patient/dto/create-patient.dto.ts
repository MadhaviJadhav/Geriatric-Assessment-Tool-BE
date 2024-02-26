import { IsArray, IsEmpty, IsNumber, IsString } from "class-validator";

export class CreatePatientDto {

  @IsString()
  patientName: string;


  age: number;

  @IsString()
  gender: string;
  consultingDate: Date;

  @IsString()
  MRN: string;

  @IsString()
  isCancerResearch: string;
  uniqueToken: string;
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
