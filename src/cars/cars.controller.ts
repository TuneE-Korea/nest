import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.carsService.deleteOne(+id);
  }
  // id없으면 수정x, 있으면 내용 수정
  @Patch()
  patchOne(@Body() updateCarDto: UpdateCarDto) {
    return this.carsService.patchOne(updateCarDto);
  }
}
