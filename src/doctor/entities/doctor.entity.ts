import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Doctor {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    doctorId:string

    @Column()
    password:string

    @Column()
    doctorName:string
}
