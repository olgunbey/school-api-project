import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { AddTeacherCommand } from 'src/Application/Teacher/Commands/AddTeacher';
import { AddTeacherDto } from 'src/Application/Teacher/Dtos/AddTeacherDto';
import { Teacher } from 'src/Domain/Entities/Teacher';

@Controller('Teacher')
export class TeacherController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('Add')
  async Add(@Body() addTeacherDto: AddTeacherDto): Promise<Teacher> {
    return await this.commandBus.execute(
      new AddTeacherCommand(
        addTeacherDto.Name,
        addTeacherDto.Surname,
        addTeacherDto.Mail,
        addTeacherDto.Password
      )
    );
  }
}
