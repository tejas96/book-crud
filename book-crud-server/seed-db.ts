import { Book } from 'src/modules/books/entities/book.entity';
import dataSource from './src/config/datasource';

async function seedBooks() {
  // Ensure the DataSource is connected
  await dataSource.initialize();

  try {
    // Create an array of 100 book records
    const books = Array.from({ length: 100 }, (_, index) => ({
      name: `Book ${index + 1}`,
      description: `Description for Book ${index + 1}`,
      publishDate: new Date(2023, index % 12, 1), // Example publish dates
      price: +(Math.random() * 100).toFixed(2), // Random price between 0 and 100
    }));

    // Insert the book records into the database
    await dataSource.getRepository(Book).insert(books);

    console.log('100 books have been successfully inserted!');
  } catch (error) {
    console.error('Error inserting books:', error);
  } finally {
    // Close the DataSource connection
    await dataSource.destroy();
  }
}

seedBooks();
