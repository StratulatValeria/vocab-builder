import React from "react";
import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.book}>
      <div className={styles.book__pgShadow}></div>
      <div className={styles.book__pg}></div>
      <div className={`${styles.book__pg} ${styles["book__pg--2"]}`}></div>
      <div className={`${styles.book__pg} ${styles["book__pg--3"]}`}></div>
      <div className={`${styles.book__pg} ${styles["book__pg--4"]}`}></div>
      <div className={`${styles.book__pg} ${styles["book__pg--5"]}`}></div>
    </div>
  );
};
