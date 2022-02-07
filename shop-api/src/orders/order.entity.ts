import { UserEntity } from 'src/users/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderI } from './interfaces/order.interface';

@Entity({ name: 'Order' })
export class OrderEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  @OneToMany(() => UserEntity, (customer) => customer.id)
  customer: UserEntity;

  @Column('jsonb')
  productName: OrderI[];

  @Column()
  amount: string;

  @Column()
  totalPrice: number;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}