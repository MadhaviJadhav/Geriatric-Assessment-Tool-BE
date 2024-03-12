import { Patient } from "src/patient/entities/patient.entity";
import { QuestionMaster } from "src/question-master/entities/question-master.entity";
import { SectionMaster } from "src/section-master/entities/section-master.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'patient-question-tracker' })
export class PatientQuestionTracker {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    answer: string;

    @Column({nullable:true})
    subquestionId:number

    @ManyToOne(() => QuestionMaster, (questionMaster) => questionMaster.patientSubQuestionTracker, { nullable: true })
    @JoinColumn({ name: 'subquestionId' })
    subquestion: QuestionMaster;

    @Column()
    questionId:number;

    @ManyToOne(() => QuestionMaster, (questionMaster) => questionMaster.patientQuestionTracker)
    @JoinColumn({ name: 'questionId' })
    question: QuestionMaster;

    @OneToOne(() => Patient, (patient) => patient.patientQuestionTracker)
    @JoinColumn({ name: 'patientId' })
    patient: Patient;

    @Column()
    sectionId:number;
    @ManyToOne(() => SectionMaster, (section) => section.questions)
    @JoinColumn({ name: 'sectionId' }) // Specify the actual column name in the database
    section: SectionMaster;

}
