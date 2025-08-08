import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { AddTeacherCommand } from 'src/Application/Teacher/Commands/AddTeacher';
import { Teacher } from 'src/Domain/Entities/Teacher';

@ApiTags('Teacher')
@Controller('Teacher')
export class TeacherController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('Add')
  async Add(@Body() addTeacherDto: AddTeacherCommand): Promise<Teacher> {
    return await this.commandBus.execute(addTeacherDto);
  }
}
