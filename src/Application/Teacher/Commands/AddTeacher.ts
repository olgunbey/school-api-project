import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ITeacherRepository } from '../Interfaces/ITeacherRepository';
import { Teacher } from 'src/Domain/Entities/Teacher';
import { Inject } from '@nestjs/common';

export class AddTeacherCommand {
  constructor(
    public readonly Name: string,
    public readonly Surname: string,
    public readonly Mail: string,
    public readonly Password: string,
  ) {}

  toTeacher(): Teacher {
    const teacher: Teacher = new Teacher();
    teacher.Mail = this.Mail;
    teacher.Name = this.Name;
    teacher.Surname = this.Surname;
    teacher.Password = this.Password;
    return teacher;
  }
}

@CommandHandler(AddTeacherCommand)
export class AddTeacherCommandHandler
  implements ICommandHandler<AddTeacherCommand>
{
  constructor(
    @Inject('ITeacherRepository')
    private readonly teacherRepo: ITeacherRepository,
  ) {}

  async execute(command: AddTeacherCommand): Promise<Teacher> {
    var teacher: Teacher = command.toTeacher();
    return await this.teacherRepo.AddTeacher(teacher);
  }
}
