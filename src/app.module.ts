import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { TeachersModule } from './teachers/teachers.module';
import { CurriculmModule } from './curriculm/curriculm.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [RoomsModule, TeachersModule, CurriculmModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
