import React from "react";
import { useSearchParams } from "react-router-dom";
import { Button, ButtonGroup, IconButton, Tooltip } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const changePage = (page: number) => {
    setSearchParams({ ...searchParams, page: String(page) });
  };

  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      aria-label="pagination"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        padding: 0.5,
      }}
    >
      <Tooltip title="Previous Page">
        <IconButton
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage <= 1}
          color="primary"
        >
          <ChevronLeft />
        </IconButton>
      </Tooltip>

      {Array.from({ length: totalPages }, (_, i) => (
        <Button
          key={i}
          variant={currentPage === i + 1 ? "contained" : "outlined"}
          color="primary"
          onClick={() => changePage(i + 1)}
          sx={{
            borderRadius: "8px",
            px: 2,
            py: 1,
            fontWeight: "bold",
          }}
        >
          {i + 1}
        </Button>
      ))}

      <Tooltip title="Next Page">
        <IconButton
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage >= totalPages}
          color="primary"
        >
          <ChevronRight />
        </IconButton>
      </Tooltip>
    </ButtonGroup>
  );
};

export default Pagination;
