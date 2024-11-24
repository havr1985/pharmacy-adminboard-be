import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Supplier } from '../../suppliers/entities/supplier.entity';
import { StatusEnum } from '../../../shared/helpers/enums/status.enum';

@Entity('deliveries')
export class Delivery {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  delivery_date: Date;

  @Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.PENDING })
  status: StatusEnum;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.deliveries, {
    onDelete: 'CASCADE',
  })
  supplier: Supplier;
}
