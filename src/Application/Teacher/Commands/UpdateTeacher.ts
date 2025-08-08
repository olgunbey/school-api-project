import { Inject } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ITeacherRepository } from "../Interfaces/ITeacherRepository";
import { UpdateResult } from "typeorm";
import { Teacher } from "src/Domain/Entities/Teacher";

export class UpdateTeacherCommand {
    constructor(
        public readonly Id: number,
        public readonly Surname: string,
        public readonly Mail: string,
        public readonly Password: string,
    ) { }


    
    toTeacher(): Teacher {
        const teacher: Teacher = new Teacher();
        teacher.Id = this.Id;
        teacher.Surname = this.Surname;
        teacher.Mail = this.Mail;
        teacher.Password = this.Password;
        return teacher;
    }
}

@CommandHandler(UpdateTeacherCommand)
export class UpdateTeacherCommandHandler implements ICommandHandler<UpdateTeacherCommand> {
    constructor(
        @Inject('ITeacherRepository')
        private readonly teacherRepo: ITeacherRepository
    ) { }
    async execute(command: UpdateTeacherCommand): Promise<UpdateResult> {
        const teacher: Teacher = command.toTeacher();
        return await this.teacherRepo.UpdateTeacher(teacher);
    }

}