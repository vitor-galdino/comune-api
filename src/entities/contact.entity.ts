import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './user.entity';

@Entity('contact')
export class Contact {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  fullName: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ length: 14 })
  phone: string;

  @CreateDateColumn({ type: 'date' })
  createdAt: string;

  @ManyToOne(() => Customer, customer => customer.contacts)
  customer: Customer;
}