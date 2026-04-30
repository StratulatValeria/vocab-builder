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

  const handlePageClick = (event: { selected: number }) => {
    onPageChange(event.selected + 1);
  };

  return (
    <div className={styles.paginationWrapper}>
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`${styles.arrowBtn} ${currentPage === 1 ? styles.disabled : ""}`}
      >
        <Icon id="icon-First" size={16} />
      </button>

      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        forcePage={currentPage - 1}
        previousLabel={<Icon id="icon-Prev" size={16} />}
        nextLabel={<Icon id="icon-Next" size={16} />}
        containerClassName={styles.pagination}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
        previousClassName={styles.arrowItem}
        nextClassName={styles.arrowItem}
        breakClassName={styles.breakItem}
        activeClassName={styles.active}
        disabledClassName={styles.disabled}
      />

      <button
        onClick={() => onPageChange(pageCount)}
        disabled={currentPage === pageCount}
        className={`${styles.arrowBtn} ${currentPage === pageCount ? styles.disabled : ""}`}
      >
        <Icon id="icon-Last" size={16} />
      </button>
    </div>
  );
};
