import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Supplier } from '../../suppliers/entities/supplier.entity';
import { OrderItem } from '../../order-items/entities/order-items.entity';
import { ProductCategoryEnum } from '../../../shared/helpers/enums/product-category.enum';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ProductCategoryEnum,
    default: ProductCategoryEnum.OTHER,
  })
  category: ProductCategoryEnum;

  @Column({ type: 'int', default: 0 })
  stock: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.products, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  supplier: Supplier;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
  orderItems: OrderItem[];
}
