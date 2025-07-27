import { Provider } from "@nestjs/common";
import { TeacherRepository } from "./Concrete/TeacherRepository";
import { AddTeacherCommandHandler } from "src/Application/Teacher/Commands/AddTeacher";

export class Provide {
     GetAllProvider(): Provider[] {
        return [
            {
                provide:'ITeacherRepository',
                useClass:TeacherRepository
            },
            AddTeacherCommandHandler,

        ];
    }
}