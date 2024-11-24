import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { Delivery } from '../../deliveries/entities/delivery.entity';

@Entity('suppliers')
export class Supplier {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  company: string;

  @OneToMany(() => Product, (product) => product.supplier)
  products: Product[];

  @OneToMany(() => Delivery, (delivery) => delivery.supplier)
  deliveries: Delivery[];
}
