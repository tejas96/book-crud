import { DataSource, ILike } from 'typeorm';
import { Book } from './entities/book.entity';

export const BookRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(Book).extend({
    async findAllWithPagination(
      search: string,
      page: number,
      limit: number,
    ): Promise<{ data: Book[]; total: number }> {
      const [result, total] = await this.findAndCount({
        where: search
          ? [
              { name: ILike(`%${search}%`) },
              { description: ILike(`%${search}%`) },
            ]
          : undefined,
        order: { id: 'ASC' },
        skip: (page - 1) * limit,
        take: limit,
      });
      return {
        data: result,
        total,
      };
    },

    async findBookById(id: string): Promise<Book> {
      return this.findOne({ where: { id } });
    },
  });
};
