import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

const rooms: { id: 'A' | 'B' | 'C'; capacity: number; isAvailable: boolean }[] =
  [];

@Injectable()
export class RoomsService {
  create(createRoomDto: CreateRoomDto) {
    const { id, capacity, isAvailable } = createRoomDto;
    rooms.push({ id, capacity, isAvailable });
    return `${id}반이 생성되었습니다.`;
  }

  findAll() {
    return rooms;
  }

  findOne(id: 'A' | 'B' | 'C') {
    const result = rooms.find((v) => v.id == id);
    if (!result) throw new NotFoundException('그런 반은 없습니다.');
    return result;
  }

  update(id: 'A' | 'B' | 'C', updateRoomDto: UpdateRoomDto) {
    const { capacity, isAvailable } = updateRoomDto;
    const index = rooms.findIndex((v) => v.id == id);
    rooms[index].capacity = capacity;
    rooms[index].isAvailable = isAvailable;

    return `${id}반은 capacity: ${capacity}, isAvailable:${isAvailable}로 수정되었습니다.`;
  }

  remove(id: 'A' | 'B' | 'C') {
    const index = rooms.findIndex((v) => v.id == id);
    rooms.splice(index, 1);
    return `${id}반이 삭제되었습니다.`;
  }
}
