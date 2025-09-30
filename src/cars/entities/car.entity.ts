import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'cars' })
export class Car {
  @PrimaryGeneratedColumn('increment', { type: 'int8' })
  id: number;
  @Column({ type: 'varchar' })
  name: string;
  @Column({ type: 'varchar' })
  color: string;
}
