import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Something went wrong!</Typography>
      <Typography variant="body1">
        We encountered an unexpected error. Please try again later.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary" style={{ marginTop: '16px' }}>
        Go to Home
      </Button>
    </Container>
  );
};

export default ErrorPage;
