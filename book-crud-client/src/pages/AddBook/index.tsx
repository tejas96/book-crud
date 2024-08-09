import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { BookForm } from '../../components';
import { BookData } from '../../types/book';
import axiosInstance from '../../config/axios';

const AddBook: React.FC = () => {
  const navigate = useNavigate();

  const handleAddBook = async (data: BookData) => {
    await axiosInstance.post('/api/v1/books', data);
    navigate(`/?search=${data.name}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Add New Book</Typography>
      <BookForm onSubmit={handleAddBook} />
    </Container>
  );
};

export default AddBook;
