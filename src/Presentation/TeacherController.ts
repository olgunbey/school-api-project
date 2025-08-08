import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { AddTeacherCommand,UpdateTeacherCommand } from 'src/Application/Teacher/Commands/';
import { AddTeacherDto,UpdateTeacherDto } from 'src/Application/Teacher/Dtos';
import { Teacher } from 'src/Domain/Entities/Teacher';
import { UpdateResult } from 'typeorm';

@ApiTags('Teacher')
@Controller('Teacher')
export class TeacherController {
  constructor(private readonly commandBus: CommandBus) { }

  @Post('Add')
  async Add(@Body() addTeacherDto: AddTeacherDto): Promise<Teacher> {
    var command: AddTeacherCommand = new AddTeacherCommand(
      addTeacherDto.Name,
      addTeacherDto.Surname,
      addTeacherDto.Mail,
      addTeacherDto.Password);

    return await this.commandBus.execute(command);
  }
  @Post('Update')
  async Update(@Body() updateTeacherDto: UpdateTeacherDto): Promise<UpdateResult> {
    var command: UpdateTeacherCommand = new UpdateTeacherCommand(
      updateTeacherDto.id,
      updateTeacherDto.Surname,
      updateTeacherDto.Name,
      updateTeacherDto.Mail,
      updateTeacherDto.Password);
    return await this.commandBus.execute(command);
  }
}
