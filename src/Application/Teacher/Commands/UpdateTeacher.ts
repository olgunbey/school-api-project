import { Inject } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ITeacherRepository } from "../Interfaces/ITeacherRepository";
import { UpdateResult } from "typeorm";
import { Teacher } from "src/Domain/Entities/Teacher";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateTeacherCommand {


    @ApiProperty({example: 1})
    public readonly Id: number;

    @ApiProperty({example: 'Burak'})
    public readonly Name: string;

    @ApiProperty({example: 'Yılmaz'})
    public readonly Surname: string;

    @ApiProperty({example: 'example@outlook.com'})
    public readonly Mail: string;

    @ApiProperty({example: 'password123'})
    public readonly Password: string;
    
    constructor(id: number, surname: string, name: string, mail: string, password: string) {
        this.Id = id;
        this.Name = name;
        this.Surname = surname;
        this.Mail = mail;
        this.Password = password;

    }

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