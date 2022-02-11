import { ProductEntity } from 'src/products/product.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderEntity } from './order.entity';

@Entity({ name: 'OrderItems' })
export class OrderItemsEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @OneToOne(() => OrderEntity, (order) => order.id)
  orderId: string;

  @Column()
  @OneToOne(() => ProductEntity, (product) => product.id)
  productId: string;

  @Column()
  amount: number;

  @Column({ type: 'decimal', scale: 2 })
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
