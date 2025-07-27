import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ITeacherRepository } from "src/Application/Teacher/Interfaces/ITeacherRepository";
import { Teacher } from "src/Domain/Entities/Teacher";
import { Repository } from "typeorm";

@Injectable()
export class TeacherRepository implements ITeacherRepository{
    constructor(
        @InjectRepository(Teacher) private readonly repo:Repository<Teacher>,
    ) {}
    AddTeacher(teacher: Teacher): Promise<Teacher> {
       return this.repo.save(teacher);
    }

}