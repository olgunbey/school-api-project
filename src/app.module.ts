import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { TeacherController } from './Presentation/TeacherController';
import { Provide } from './Infrastructure/Persistence/Provide';

const provide:Provide = new Provide();

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
    TypeOrmModule.forFeature(provide.LoadEntity()),
    CqrsModule.forRoot()
  ],
  controllers: [TeacherController],
  providers: provide.GetAllProvider(),
})
export class AppModule {}