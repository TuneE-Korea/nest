import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  async create(createCarDto: CreateCarDto) {
    const { color, name } = createCarDto;
    const result = await this.carRepository.save({ color, name });
    return `${result.id}가 생성되었습니다!`;
  }

  async findAll() {
    const result = await this.carRepository.find();
    return result;
  }

  async find(id: string) {
    const result = await this.carRepository.findOne({ where: { id: +id } });
    if (!result) throw new NotFoundException('그런 차는 없습니다');
    return result;
  }
}
