import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { Container, Typography, Paper, Stack, IconButton } from '@mui/material';
import axiosInstance from '../../config/axios';
import { Edit } from '@mui/icons-material';

interface Book {
  name: string;
  description: string;
  publishDate: string;
  price: number;
}

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const { data } = await axiosInstance.get(`/api/v1/books/${id}`);
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="h4" gutterBottom>Book Details</Typography>
        <IconButton  href={`/edit/${id}`}><Edit/></IconButton>
      </Stack>
      <Paper style={{ padding: '16px' }}>
        <Typography variant="h5">{book.name}</Typography>
        <Typography variant="body1" paragraph>{book.description}</Typography>
        <Typography variant="body2">Published on: {new Date(book.publishDate).toDateString()}</Typography>
        <Typography variant="body2">Price: ${book.price}</Typography>
      </Paper>
    </Container>
  );
};

export default BookDetails;
