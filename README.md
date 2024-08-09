Here’s a comprehensive `README.md` for your book CRUD application:

---

# 📚 Book CRUD Application

Welcome to the Book CRUD application! This project allows users to manage a collection of books with features to add, list, search, and paginate through books. Built with modern technologies, this application demonstrates the integration of React, TypeScript, Node.js, PostgreSQL, and TypeORM.

## 📜 Project Overview

- **Frontend**: React with TypeScript and Material-UI (MUI)
- **Backend**: Node.js with NestJS and TypeORM
- **Database**: PostgreSQL

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:tejas96/book-crud.git
cd book-crud
```

### 2. Install Dependencies

For the backend:

```bash
cd book-crud-server
npm install
```

For the frontend:

```bash
cd book-crud-client
npm install
```

### 3. Environment Variables

Create a `.env` file in the `server` directory and add the following variables:

```env
NODE_ENV=local

POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=<user-name>
POSTGRES_PASSWORD=<passowrd>
POSTGRES_DATABASE=bookcrud
POSTGRES_CONNECTION_POOL_SIZE=50
```

For the frontend, create a `.env` file in the `client` directory and add:

```env
REACT_APP_API_URL=http://localhost:3001
```

## 🛠️ Running the Application

### Backend

1. **Start the Backend Server:**

    ```bash
    cd book-crud-server
    npm run start:dev
    ```

2. **Migrations:**

    - **Run Migrations:**

        ```bash
        npm run migration:run
        ```

    - **Revert Migration(incase not work):**

        ```bash
        npm run migration:revert
        ```

### Frontend

1. **Start the Frontend Development Server:**

    ```bash
    cd book-crud-client
    npm start
    ```

## 🌱 Seeding the Database

To seed the database with 100 book records, run the following script:

```bash
cd book-crud-server
npm run seed
```

**Seed Script Example:**

```typescript
import { DataSource } from 'typeorm';
import { ormConfig } from './ormConfig';
import { Book } from './entities/book.entity';

const dataSource = new DataSource(ormConfig);

const seedBooks = async () => {
  await dataSource.initialize();
  const bookRepository = dataSource.getRepository(Book);

  const books = Array.from({ length: 100 }, (_, index) => ({
    name: `Book ${index + 1}`,
    description: `Description for book ${index + 1}`,
    publishDate: new Date().toISOString(),
    price: (Math.random() * 100).toFixed(2),
  }));

  await bookRepository.save(books);
  console.log('Books seeded successfully!');
  await dataSource.destroy();
};

seedBooks().catch((error) => {
  console.error('Error seeding books:', error);
});
```

## 🧪 Testing

Add your tests in the `client` and `server` directories. Run tests using:

### Backend

```bash
cd book-crud-server
npm run test
```

### Frontend

```bash
cd book-crud-client
npm test
```

## 📚 Features

- **CRUD Operations**: Add, view, update, and delete books.
- **Search and Pagination**: Search books by name and description, with pagination.
- **Responsive Design**: Adapted for both desktop and mobile devices.
- **Error Handling**: Custom error pages for better user experience.

## 🎨 Customization

- **Themes**: Customize the MUI theme in the frontend for a unique look.
- **Icons**: Use Material-UI icons to enhance the UI.

## 📝 Documentation

For further details on the implementation, refer to the code comments and additional documentation in the `docs` folder.

## 🤝 Contributing

Feel free to fork the repository, create a branch, and submit a pull request for any improvements or bug fixes.

## 🧩 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to adjust the content according to your needs or add any additional information!