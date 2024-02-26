import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactType } from "../enum/contact-enum";
import { Patient } from "src/patient/entities/patient.entity";

@Entity({name:'contactDetail'})
export class ContactDetail {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ type: 'enum', enum: ContactType })
    contactType:ContactType;

    @Column({default:true})
    isPrimary:boolean

    @Column({nullable:true})
    contactValue:string
    
    // @Column({nullable:true})
    // email:string

    @Column({default:false})
    isSecondary:boolean

    @Column({default:false})
    isCARGContact:boolean

    @Column({name:'patientId', default:1})
    patientId:number

    @ManyToOne(()=> Patient, (patient)=> patient.contacts)
    @JoinColumn({name:'patientId'})
    patient:Patient
    
    
}
