import { Teacher } from "src/Domain/Entities/Teacher";

export interface ITeacherRepository {
    AddTeacher(teacher:Teacher): Promise<Teacher>;
}