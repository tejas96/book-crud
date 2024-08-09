import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Stack,
} from "@mui/material";

import { Pagination } from "../../components";
import axiosInstance from "../../config/axios";

interface Book {
  id: number;
  name: string;
  description: string;
  publishDate: string;
  price: number;
}
const perPageLimit = 10;

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(1);

  const fetchBooks = async (
    page: number,
    limit: number,
    searchQuery: string,
  ) => {
    const { data } = await axiosInstance.get("/api/v1/books", {
      params: { page, search: searchQuery, limit },
    });
    setBooks(data.data);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    const searchQuery = searchParams.get("search") || "";
    const limit = Number(searchParams.get("limit")) || perPageLimit;

    fetchBooks(page, limit, searchQuery);
  }, [searchParams]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ search: e.target.value, page: "1" });
  };

  return (
    <Container>
      <Stack spacing={2}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h4" gutterBottom>
            Book List
          </Typography>
          <Button href="/add" variant="contained" sx={{ height: "40px" }}>
            + Create
          </Button>
        </Stack>
        <TextField
          label="Search by name or description"
          variant="outlined"
          fullWidth
          value={searchParams.get("search") || ""}
          onChange={handleSearch}
          margin="normal"
        />
        <Grid container spacing={2}>
          {books.length === 0 ? (
            <Grid item xs={12}>
              <Typography variant="h6" align="center" color="textSecondary">
                No books found
              </Typography>
            </Grid>
          ) : (
            books.map((book) => (
              <Grid item xs={12} sm={6} md={4} key={book.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{book.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {book.description}
                    </Typography>
                    <Typography variant="body2">
                      Published on: {new Date(book.publishDate).toDateString()}
                    </Typography>
                    <Typography variant="body2">
                      Price: ${book.price}
                    </Typography>
                    <Button
                      component={Link}
                      to={`/book/${book.id}`}
                      variant="contained"
                      color="primary"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
        <Pagination
          totalPages={totalPages}
          currentPage={Number(searchParams.get("page")) || 1}
        />
      </Stack>
    </Container>
  );
};

export default BookList;
