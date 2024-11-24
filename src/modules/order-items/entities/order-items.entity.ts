import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';
import { Product } from '../../products/entities/product.entity';

@Entity('order-items')
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    generatedType: 'STORED',
    asExpression: 'quantity * price',
  })
  total_price: number;

  @ManyToOne(() => Order, (order) => order.orderItems, { onDelete: 'CASCADE' })
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderItems, {
    onDelete: 'CASCADE',
  })
  product: Product;
}
