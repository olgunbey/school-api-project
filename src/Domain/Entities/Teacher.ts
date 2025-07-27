import { Column,Entity,PrimaryGeneratedColumn,OneToMany } from "typeorm";
import { TeacherClassroomLesson } from "./TeacherClassroomLesson";


@Entity({name:'Teacher'})
export class Teacher {

    @PrimaryGeneratedColumn()
    Id:number;

    @Column({type:'varchar'})
    Name:string;

    @Column({type:'varchar'})
    Surname:string;

    @Column({type:'varchar'})
    Mail:string;

    @Column({type:'varchar'})
    Password:string;

    @OneToMany(()=> TeacherClassroomLesson,(teacherclasslesson)=>teacherclasslesson.Teacher)
    TeacherClassroomLessons:TeacherClassroomLesson[]

}