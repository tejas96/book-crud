// src/books/book.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('date')
  publishDate: Date;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;
}
