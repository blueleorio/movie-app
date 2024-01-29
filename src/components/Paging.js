import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useAuth } from "../contexts/AuthContext";
import PaginationItem from "@mui/material/PaginationItem";
import { Link, useParams } from "react-router-dom";

export default function Paging() {
  const { currentPage, setPage } = useAuth();
  const { pageId } = useParams();

  // Update the current page when the pageId changes
  React.useEffect(() => {
    if (pageId) {
      setPage(parseInt(pageId, 10));
    }
  }, [pageId, setPage]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      direction="row"
    >
      <Pagination
        count={10} // Change this count based on your total number of pages
        shape="rounded"
        page={currentPage}
        onChange={handlePageChange}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/page/${item.page}`}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
