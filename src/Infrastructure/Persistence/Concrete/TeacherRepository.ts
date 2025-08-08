import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ITeacherRepository } from "src/Application/Teacher/Interfaces/ITeacherRepository";
import { Teacher } from "src/Domain/Entities/Teacher";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

@Injectable()
export class TeacherRepository implements ITeacherRepository{
    constructor(
        @InjectRepository(Teacher) private readonly repo:Repository<Teacher>,
    ) {}
    AddTeacher(teacher: Teacher): Promise<Teacher> {
       return this.repo.save(teacher);
    }
    DeleteTeacher(id: number): Promise<DeleteResult> 
    {
       return this.repo.delete(id);        
    }
    UpdateTeacher(teacher: Teacher): Promise<UpdateResult> 
    {
        return this.repo.update(teacher.Id, teacher)
    }
}