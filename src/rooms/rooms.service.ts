import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}

  create(createRoomDto: CreateRoomDto) {}
  async findOne(id: string) {
    const result = await this.roomRepository.findOne({
      where: {
        id: +id,
      },
    });
    return result;
  }
}
