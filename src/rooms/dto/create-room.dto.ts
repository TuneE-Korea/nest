import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsEnum,
  IsPositive,
  Min,
  Max,
} from 'class-validator';

enum RoomID {
  A = 'A',
  B = 'B',
  C = 'C',
}

export class CreateRoomDto {
  @IsEnum(RoomID)
  id: 'A' | 'B' | 'C';

  @IsInt()
  @IsPositive()
  @Min(5)
  @Max(40)
  @Type(() => Number)
  capacity;

  @IsBoolean()
  @Type(() => Boolean)
  isAvailable;
}
