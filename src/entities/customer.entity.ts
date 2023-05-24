import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Contact } from './contact.entity';

@Entity('customer')
export class Customer {

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

  @OneToMany(() => Contact, contact => contact.customer)
  contacts: Contact[];
}