import { ContactDetail } from "src/contact-details/entities/contact-detail.entity";
import { FormStatus } from "src/form-status/entities/form-status.entity";
import { PatientQuestionTracker } from "src/patient-question-tracker/entities/patient-question-tracker.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'patient'})
export class Patient {
  

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patientName: string;

  @Column()
  age: number;

  @Column()
  gender: string;

  @Column({type:'datetime'})
  consultingDate: Date;

  @Column()
  MRN: string;

  @Column()
  isCancerResearch: string;

  @Column()
  uniqueToken: string;

  @Column({nullable:true})
  patientNo: string;

  @Column({nullable:true})
  trialId: string;

  @Column('simple-array', {nullable:true})
  GADoneBy: string[];

  @Column({nullable:true})
  isGeriatricICF: string;

  @Column({nullable:true})
  isCARGICF: string;

  @Column({nullable:true})
  reason: string;

  @Column({nullable:true})
  assessmentType: string;

  @Column({nullable:true,type:'simple-array'})
  deviceAvailable: string[];

  @Column({nullable:true, type:'simple-array'})
  socialMedia: string[];

  @Column({default:false})
  formCompleted: boolean;
   
   @OneToMany(()=> ContactDetail, (contact)=>contact.patient, {eager:true})
   contacts:ContactDetail[];

   @OneToMany(()=>FormStatus, (form)=>form.patient)
   forms:FormStatus[];

   @OneToOne(()=> PatientQuestionTracker, patientSectionMaster=>patientSectionMaster.patient)
  patientQuestionTracker:PatientQuestionTracker;
  
}
