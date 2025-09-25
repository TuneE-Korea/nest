import { PartialType } from '@nestjs/mapped-types';
import { CreateCurriculmDto } from './create-curriculm.dto';

export class UpdateCurriculmDto extends PartialType(CreateCurriculmDto) {}
