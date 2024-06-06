import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState(1);

  const onNextPage = () => {
    setPage(page + 1);
  };

  const onPreviousPage = () => {
    setPage(page - 1);
  };

  return {
    page,
    onNextPage,
    onPreviousPage
  };
};
