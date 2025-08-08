import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ITeacherRepository } from "../Interfaces/ITeacherRepository";
import { Teacher } from "src/Domain/Entities/Teacher";
import { Inject } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";


export class AddTeacherCommand {
    
    @ApiProperty({ example: 'Ahmet' })
    public readonly Name: string;

    @ApiProperty({ example: 'Yılmaz' })
    public readonly Surname: string;

    @ApiProperty({ example: 'ahmet@example.com' })
    public readonly Mail: string
    
    @ApiProperty({ example: '123456' })
    public readonly Password: string;

    constructor(Name: string, Surname: string, Mail: string, Password: string) {
    this.Name = Name;
    this.Surname = Surname;
    this.Mail = Mail;
    this.Password = Password;
  }

    toTeacher():Teacher {
        const teacher: Teacher = new Teacher();
        teacher.Mail = this.Mail;
        teacher.Name = this.Name;
        teacher.Surname = this.Surname;
        teacher.Password = this.Password;
        return teacher;
    }
}

@CommandHandler(AddTeacherCommand)
export class AddTeacherCommandHandler implements ICommandHandler<AddTeacherCommand> {

    constructor(
        @Inject('ITeacherRepository')
        private readonly teacherRepo: ITeacherRepository
    ) { }

    async execute(command: AddTeacherCommand): Promise<Teacher> {
        const teacher: Teacher = command.toTeacher();
        return await this.teacherRepo.AddTeacher(teacher);
    }
}
