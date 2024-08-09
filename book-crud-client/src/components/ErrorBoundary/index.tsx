import React, { Component, ErrorInfo } from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<{ children: React.ReactNode }, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service here.
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Typography variant="h4" gutterBottom>
            Something went wrong!
          </Typography>
          <Typography variant="body1">
            We’re sorry, but something went wrong. Please try again later.
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            style={{ marginTop: "16px" }}
          >
            Go to Home
          </Button>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
