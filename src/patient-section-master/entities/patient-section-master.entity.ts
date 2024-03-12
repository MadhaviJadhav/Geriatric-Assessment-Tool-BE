import { Patient } from "src/patient/entities/patient.entity";
import { SectionMaster } from "src/section-master/entities/section-master.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'patient-section-tracker'})
export class PatientSectionMaster {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    completedStatus:number;

    @Column()
    patientId:number;

    // @OneToOne(()=> Patient, patient=>patient.patientSectionMaster)
    // @JoinColumn({name:'patientId'})
    // patientSection:Patient

    @Column()
    sectionId:number;
    @OneToMany(()=> SectionMaster, sectionMaster=>sectionMaster.patientSectionMaster)
    @JoinColumn({name:'sectionId'})
    sectionMaster:SectionMaster[];
}
