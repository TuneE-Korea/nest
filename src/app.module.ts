import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { TeachersModule } from './teachers/teachers.module';
import { CurriculmModule } from './curriculm/curriculm.module';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './rooms/entities/room.entity';
import { CarsModule } from './cars/cars.module';
import { Car } from './cars/entities/car.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // DB종류
      host: 'aws-1-ap-northeast-2.pooler.supabase.com', // DB 실제 있는 곳
      port: 5432, // 포트번호
      username: 'postgres.sqwissdplfylxaivjhfo', // DB 사용자 이름
      password: 'kty0522^^', // DB 비번
      database: 'postgres', // DB
      entities: [Room, Car], // DB에서 사용되는 테이블
      synchronize: false, // 서버와 DB 동기화 여부
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    RoomsModule,
    TeachersModule,
    CurriculmModule,
    StudentsModule,
    CarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
