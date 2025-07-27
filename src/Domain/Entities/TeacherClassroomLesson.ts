import { Entity,PrimaryGeneratedColumn,ManyToOne,Column, JoinColumn, Unique, PrimaryColumn } from "typeorm";
import { Teacher } from "./Teacher";
import { Lesson } from "./Lesson";
import { Classroom } from "./Classroom";

@Entity()
export class TeacherClassroomLesson {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Teacher, (teacher) => teacher.TeacherClassroomLessons, { eager: true })
  @JoinColumn({name:'TeacherId'})
  @PrimaryColumn({name:'TeacherId',type:'int'})
  Teacher: Teacher;

  @ManyToOne(() => Classroom, (classroom) => classroom.TeacherClassroomLessons, { eager: true })
  @JoinColumn({name:'ClassroomId'})
  @PrimaryColumn({name:'ClassroomId',type:'int'})
  Classroom: Classroom;

  @ManyToOne(() => Lesson, (lesson) => lesson.TeacherClassroomLessons, { eager: true })
  @JoinColumn({name:'LessonId'})
  Lesson: Lesson;
}