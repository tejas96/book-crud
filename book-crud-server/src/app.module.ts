import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './modules/books/books.module';
import { ConfigModule } from '@nestjs/config';
import { ormConfig } from './config/ormConfig';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormConfig),
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
