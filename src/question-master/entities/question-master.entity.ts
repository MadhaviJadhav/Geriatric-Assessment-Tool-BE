import { PatientQuestionTracker } from "src/patient-question-tracker/entities/patient-question-tracker.entity";
import { SectionMaster } from "src/section-master/entities/section-master.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'question-master' })
export class QuestionMaster {

  @PrimaryGeneratedColumn()
  questionId: number;

  @Column()
  questionMarathi: string;

  @Column()
  questionEnglish: string;

  @Column()
  name: string;

  @Column({ nullable: true, default: "input" })
  questionType: string;

  @Column({ type: 'json', nullable: true }) // Change to json type for an array of objects
  questionOptions: { id: number, text: string }[];


  @Column({ type: 'json', nullable: true })
  subquestions: {
    subquestionid: number;
    questionType: string;
    min: number;
    max: number;
    minLabel?: string;
    maxLabel?: string;
    meaning?: string;
  }[];

  @Column({ name: 'sectionId' })
  sectionId: number;

  @ManyToOne(() => SectionMaster, section => section.questions)
  @JoinColumn({ name: 'sectionId' })
  section: SectionMaster[];

  @OneToMany(() => PatientQuestionTracker, (patientQuestionTracker) => patientQuestionTracker.question)
  patientQuestionTracker: PatientQuestionTracker;

  @OneToMany(() => PatientQuestionTracker, (patientQuestionTracker) => patientQuestionTracker.subquestion)
  patientSubQuestionTracker: PatientQuestionTracker;

}
