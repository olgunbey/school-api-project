import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddTeacherCommand } from "../Handlers/AddTeacherCommand";
import { ITeacherRepository } from "../Interfaces/ITeacherRepository";
import { Teacher } from "src/Domain/Entities/Teacher";
import { Inject } from "@nestjs/common";


@CommandHandler(AddTeacherCommand)
export class AddTeacherCommandHandler implements ICommandHandler<AddTeacherCommand> {

     constructor(
    @Inject('ITeacherRepository') 
    private readonly teacherRepo: ITeacherRepository
  ) {}

   async execute(command: AddTeacherCommand): Promise<Teacher> {
       const teacher:Teacher= new Teacher();
       teacher.Mail=command.Mail;
       teacher.Name=command.Name;
       teacher.Surname=command.Surname;
       teacher.Password=command.Password;
       return await this.teacherRepo.AddTeacher(teacher);
    }

}