import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './Domain/Entities/Lesson';
import { Teacher } from './Domain/Entities/Teacher';
import { TeacherClassroomLesson } from './Domain/Entities/TeacherClassroomLesson';
import { Student } from './Domain/Entities/Student';
import { Classroom } from './Domain/Entities/Classroom';
import { CqrsModule } from '@nestjs/cqrs';
import { TeacherController } from './Presentation/TeacherController';
import { AddTeacherCommandHandler } from './Application/Teacher/Commands/AddTeacher';
import { TeacherRepository } from './Infrastructure/Persistence/Concrete/TeacherRepository';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'checkpointpassword',
      database: 'pgTypeOrm',
      synchronize: true,
      autoLoadEntities:true
      // logging:true
    }),
    TypeOrmModule.forFeature([Lesson,Teacher,TeacherClassroomLesson,Student,Classroom]),
    CqrsModule.forRoot()
  ],
  controllers: [AppController,TeacherController],
  providers: [AppService,
    AddTeacherCommandHandler,
    {
      provide:'ITeacherRepository',
      useClass:TeacherRepository
    }
  ],
})
export class AppModule {}