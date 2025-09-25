import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurriculmService } from './curriculm.service';
import { CreateCurriculmDto } from './dto/create-curriculm.dto';
import { UpdateCurriculmDto } from './dto/update-curriculm.dto';

@Controller('curriculm')
export class CurriculmController {
  constructor(private readonly curriculmService: CurriculmService) {}

  @Post()
  create(@Body() createCurriculmDto: CreateCurriculmDto) {
    return this.curriculmService.create(createCurriculmDto);
  }

  @Get()
  findAll() {
    return this.curriculmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curriculmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurriculmDto: UpdateCurriculmDto) {
    return this.curriculmService.update(+id, updateCurriculmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curriculmService.remove(+id);
  }
}
