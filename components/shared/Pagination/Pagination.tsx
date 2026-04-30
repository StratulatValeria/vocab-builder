"use client";

import ReactPaginate from "react-paginate";
import { Icon } from "@/components/ui/Icon";
import styles from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

export const Pagination = ({
  pageCount,
  onPageChange,
  currentPage,
}: PaginationProps) => {
  if (pageCount <= 1) return null;

  return (
    <ReactPaginate
      breakLabel="..."
      // nextLabel={<Icon id="icon-arrow-right" size={16} />}
      onPageChange={(event) => onPageChange(event.selected + 1)}
      forcePage={currentPage - 1}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      // previousLabel={<Icon id="icon-arrow-left" size={16} />}
      previousLabel={"<"}
      nextLabel={">"}
      renderOnZeroPageCount={null}
      containerClassName={styles.pagination}
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.pageLink}
      previousClassName={styles.arrowItem}
      nextClassName={styles.arrowItem}
      breakClassName={styles.breakItem}
      activeClassName={styles.active}
      disabledClassName={styles.disabled}
    />
  );
};
