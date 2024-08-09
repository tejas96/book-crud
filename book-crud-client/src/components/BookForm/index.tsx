import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Grid, Typography, Stack } from '@mui/material';
import { BookData } from '../../types/book';

interface BookFormProps {
  onSubmit: (data: BookData) => void;
  initialData?: BookData;
}



const BookForm: React.FC<BookFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<BookData>(
    initialData || { name: '', description: '', publishDate: '', price: 0 }
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6">Book Details</Typography>
      <Stack spacing={2}>
          <TextField
            label="Book Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            required
          />

          <TextField
            label="Publish Date"
            name="publishDate"
            type="date"
            value={formData.publishDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
 
        
          <TextField
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            fullWidth
            required
          />
       
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        
      </Stack>
    </form>
  );
};

export default BookForm;
