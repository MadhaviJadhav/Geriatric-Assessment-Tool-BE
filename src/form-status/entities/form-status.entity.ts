import { Patient } from "src/patient/entities/patient.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'form-status'})
export class FormStatus {
    

    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    statusId:string

    @Column()
    isCompleted:boolean

    @CreateDateColumn({ type: 'timestamp' , name:'completedDate'})
    createdAt: Date;
    
    @Column({name:'patientId'})
    patientId:number
    
    @ManyToOne(()=> Patient, (patient)=>patient.forms)
    @JoinColumn({name:'patientId'})
    patient:Patient
}
