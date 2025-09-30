import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'rooms' })
export class Room {
  @PrimaryGeneratedColumn('increment', { type: 'int8' })
  id: number;

  @Column({ type: 'int8' })
  capacity: number;

  @Column({ type: 'boolean' })
  isAvailable: boolean;
}
