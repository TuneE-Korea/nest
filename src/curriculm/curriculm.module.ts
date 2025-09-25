import { Module } from '@nestjs/common';
import { CurriculmService } from './curriculm.service';
import { CurriculmController } from './curriculm.controller';

@Module({
  controllers: [CurriculmController],
  providers: [CurriculmService],
})
export class CurriculmModule {}
