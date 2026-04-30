"use client";
import { useEffect, useState } from "react";
// import { useAuthStore } from "@/lib/store/useAuthStore";
import { Icon } from "@/components/ui/Icon";
import styles from "./DictionaryPage.module.css";
import { WordsTable } from "@/components/shared/WordsTable";
import { api } from "@/lib/api/client";
import { Word } from "@/lib/type/types";
import { Pagination } from "@/components/shared/Pagination/Pagination";
export default function DictionaryPage() {
  const [words, setWords] = useState<Word[]>([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 7;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/words/categories");
        setCategories(res.data);
      } catch (e) {
        console.error("Помилка категорій:", e);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        setIsLoading(true);
        const res = await api.get(
          `/words/all?page=${currentPage}&limit=${limit}`,
        );

        setWords(res.data.results);
        setTotalPages(res.data.totalPages || 0);
        setTotalCount(res.data.totalCount || 0);
      } catch (error) {
        console.error("Помилка слів:", error);
      } finally {
        setTimeout(() => setIsLoading(false), 300);
      }
    };

    fetchWords();
  }, [currentPage]);
  return (
    <div className={styles.container}>
      <div className={styles.filtersSection}>
        <div className={styles.controlsGroup}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder="Find the word"
              className={styles.input}
            />
            <Icon id="icon-search" size={20} className={styles.searchIcon} />
          </div>

          <div className={styles.inputWrapper}>
            <select className={styles.input}>
              <option value="">Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.statisticsAndActions}>
          <div className={styles.stats}>
            <span className="text-[#121417]/50">To study:</span>
            <span className={styles.statsValue}>{totalCount}</span>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.actionBtn}>
              Add word{" "}
              <Icon id="icon-plus" size={20} className="text-[#85AA9F]" />
            </button>
            <button className={styles.actionBtn}>
              Train oneself{" "}
              <Icon
                id="icon-arrow-right"
                size={20}
                className="text-[#85AA9F]"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[30px] min-h-[400px] pb-10 relative overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/60 backdrop-blur-[1px]">
            <div className="flex flex-col items-center gap-2">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#85AA9F]"></div>
              <span className="text-sm text-[#121417]/50">Оновлення...</span>
            </div>
          </div>
        )}

        <WordsTable words={words} />

        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <Pagination
              pageCount={totalPages}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
