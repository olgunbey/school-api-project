import { Column,Entity,PrimaryGeneratedColumn,OneToMany, JoinColumn } from "typeorm";
import { TeacherClassroomLesson } from "./TeacherClassroomLesson";
@Entity({name:'Lesson'})
export class Lesson {

    @PrimaryGeneratedColumn()
    Id:number

    @Column({type:'varchar'})
    Name:string;

    @OneToMany(()=>TeacherClassroomLesson,(teacherclassroomlesson)=> teacherclassroomlesson.Lesson)
    @JoinColumn()
    TeacherClassroomLessons:TeacherClassroomLesson[]
}