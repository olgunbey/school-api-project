import { Provider } from "@nestjs/common";
import { TeacherRepository } from "./Concrete/TeacherRepository";
import { AddTeacherCommandHandler } from "src/Application/Teacher/Commands/AddTeacher";
import { Lesson } from "src/Domain/Entities/Lesson";
import { Teacher } from "src/Domain/Entities/Teacher";
import { TeacherClassroomLesson } from "src/Domain/Entities/TeacherClassroomLesson";
import { Student } from "src/Domain/Entities/Student";
import { Classroom } from "src/Domain/Entities/Classroom";

export class Provide {
     GetAllProvider(): Provider[] {
        return [
            {
                provide:'ITeacherRepository',
                useClass:TeacherRepository
            },
            ...this.GetCommandHandler()

        ];
    }
    private GetCommandHandler(): Provider[]
    {
        return [
            AddTeacherCommandHandler
        ]
    }
    LoadEntity(): Function[]{
        return [Lesson,Teacher,TeacherClassroomLesson,Student,Classroom];
    }
}
