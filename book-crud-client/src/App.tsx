import React from "react";
import { BrowserRouter } from "react-router-dom";
import BookCrudAppRouter from "./routing/AppRouting";
import { ErrorBoundary } from "./components";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <BookCrudAppRouter />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
