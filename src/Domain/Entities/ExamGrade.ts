import { Column,PrimaryGeneratedColumn,Entity } from "typeorm";

export class ExamGrade {

    @PrimaryGeneratedColumn()
    Id:number;

    @Column({type:'int'})
    FirstExam:number;
}