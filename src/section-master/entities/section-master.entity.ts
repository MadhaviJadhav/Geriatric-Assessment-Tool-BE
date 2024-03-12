
import { PatientQuestionTracker } from "src/patient-question-tracker/entities/patient-question-tracker.entity";
import { PatientSectionMaster } from "src/patient-section-master/entities/patient-section-master.entity";
import { QuestionMaster } from "src/question-master/entities/question-master.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'sectionmaster'})
export class SectionMaster {

    @PrimaryGeneratedColumn()
    sectionId:number;

    @Column()
    sectionName:string;

    @Column({ nullable: true })
    sectionDescribtion: string;

    @OneToMany(()=> QuestionMaster, questions => questions.section)
    questions:QuestionMaster[];

    @OneToMany(()=>PatientQuestionTracker, patientQuestionTracker=>patientQuestionTracker.section)
    patientQuestionTracker:PatientQuestionTracker[];

    @ManyToOne(()=>PatientSectionMaster, patientSectionMaster=>patientSectionMaster.sectionMaster)
    patientSectionMaster:PatientSectionMaster;
  //   @OneToMany(() => QuestionMaster, questionMaster => questionMaster.section)
  //   questionMasters: QuestionMaster[];

  //   @OneToMany(() => PatientSectionTracker, patientSectionTracker => patientSectionTracker.section)
  // patientSectionTrackers: PatientSectionTracker[];
}
