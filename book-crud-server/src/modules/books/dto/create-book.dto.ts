import { IsString, IsDate, IsNumber } from 'class-validator';

export class CreateBookDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsDate()
  publishDate: Date;

  @IsNumber()
  price: number;
}
