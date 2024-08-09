// src/books/books.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { BookRepository } from './book.repository';
import { DataSource } from 'typeorm';

@Injectable()
export class BooksService {
  private readonly bookRepository: ReturnType<typeof BookRepository>;

  constructor(private dataSource: DataSource) {
    this.bookRepository = BookRepository(this.dataSource);
  }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book: Book = {
      description: createBookDto.description,
      name: createBookDto.name,
      price: createBookDto.price,
      publishDate: createBookDto.publishDate,
    };
    return this.bookRepository.save(book);
  }

  async findAllBooks(
    page: number,
    limit: number,
    search: string,
  ): Promise<{ data: Book[]; total: number }> {
    return this.bookRepository.findAllWithPagination(search, page, limit);
  }

  async findBookById(id: string): Promise<Book> {
    const book = await this.bookRepository.findBookById(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async updateBook(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = await this.bookRepository.findBookById(id); // Ensure the book exists
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    await this.bookRepository.update(book.id, updateBookDto);
    return await this.bookRepository.findBookById(book.id);
  }

  async remove(id: string): Promise<void> {
    const book = await this.bookRepository.findBookById(id);
    await this.bookRepository.remove(book);
  }
}
