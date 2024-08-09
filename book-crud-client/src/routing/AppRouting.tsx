import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AddBook, BookDetails, BookList, EditBook, ErrorPage } from '../pages';

const BookCrudAppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/book/:id" element={<BookDetails />} />

      {/** we can make below route private by simply wrapping the route component with PrivateRoute component */}
      <Route
        path="/add"
        element={
          //<PrivateRoute>
          <AddBook />
          //</PrivateRoute>
        }
      />
      <Route
        path="/edit/:id"
        element={
          // <PrivateRoute>
          <EditBook />
          //</PrivateRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default BookCrudAppRouter;
