import { Injectable } from '@nestjs/common';
import { CreateCurriculmDto } from './dto/create-curriculm.dto';
import { UpdateCurriculmDto } from './dto/update-curriculm.dto';

@Injectable()
export class CurriculmService {
  create(createCurriculmDto: CreateCurriculmDto) {
    return 'This action adds a new curriculm';
  }

  findAll() {
    return `This action returns all curriculm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} curriculm`;
  }

  update(id: number, updateCurriculmDto: UpdateCurriculmDto) {
    return `This action updates a #${id} curriculm`;
  }

  remove(id: number) {
    return `This action removes a #${id} curriculm`;
  }
}
