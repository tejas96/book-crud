import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { BookForm } from "../../components";
import { BookData } from "../../types/book";
import axiosInstance from "../../config/axios";

const EditBook: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<BookData | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      const { data } = await axiosInstance.get(`/api/v1/books/${id}`);
      setBook(data);
    };
    fetchBook();
  }, [id]);

  const handleEditBook = async (data: BookData) => {
    const { data: res } = await axiosInstance.put(`/api/v1/books/${id}`, data);
    navigate(`/?search=${res.name}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit Book
      </Typography>
      {book && <BookForm onSubmit={handleEditBook} initialData={book} />}
    </Container>
  );
};

export default EditBook;
