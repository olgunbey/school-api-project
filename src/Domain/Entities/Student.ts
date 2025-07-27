import { Column,Entity,PrimaryGeneratedColumn,ManyToOne, JoinColumn } from "typeorm";
import { Classroom } from "./Classroom";

@Entity({name:'Student'})
export class Student {

    @PrimaryGeneratedColumn()
    Id:number;

    @Column({unique:true})
    SchoolNumber:number;

    @Column({type:'varchar'})
    Name:string;

    @Column({type:'varchar'})
    Surname:string;

    @Column({type:'varchar'})
    Password:string;

    @ManyToOne(()=>Classroom,(classroom)=>classroom.Students)
    @JoinColumn({name:'ClassroomId'})
    Classroom:Classroom;

    @Column()
    ClassroomId:number;

}