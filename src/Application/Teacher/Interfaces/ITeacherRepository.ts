import { Teacher } from "src/Domain/Entities/Teacher";
import { UpdateResult } from "typeorm";

export interface ITeacherRepository {
    AddTeacher(teacher:Teacher): Promise<Teacher>;
    UpdateTeacher(teacher: Teacher): Promise<UpdateResult>;
}