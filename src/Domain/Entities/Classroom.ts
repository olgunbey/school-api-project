import { Entity,PrimaryGeneratedColumn,Column,OneToMany } from "typeorm";
import { Student } from "./Student";
import { TeacherClassroomLesson } from "./TeacherClassroomLesson";

@Entity({name:'Classroom'})
export class Classroom {

    @PrimaryGeneratedColumn()
    Id:number;

    @Column({type:'varchar'})
    Name:string;
    
    @OneToMany(()=> Student,(student)=>student.Classroom)
    Students:Student[];

    @OneToMany(()=> TeacherClassroomLesson,(teacherclasslesson)=> teacherclasslesson.Classroom)
    TeacherClassroomLessons:TeacherClassroomLesson[]
}