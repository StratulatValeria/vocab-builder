"use client";
import { useEffect, useState } from "react";
// import { useAuthStore } from "@/lib/store/useAuthStore";
import { Icon } from "@/components/ui/Icon";
import styles from "./DictionaryPage.module.css";
import { WordsTable } from "@/components/shared/WordsTable";
import { api } from "@/lib/api/client";
import { Word } from "@/lib/type/types";
import { Pagination } from "@/components/ui/Pagination/Pagination";
import { Loader } from "@/components/Loader/Loader";
import { Select } from "@/components/ui/Select/Select";

export default function DictionaryPage() {
  const [words, setWords] = useState<Word[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 7;

  const categoryOptions = [
    { value: "", label: "All " },
    ...categories.map((cat) => ({
      value: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
    })),
  ];

  useEffect(() => {
    if (inputValue.trim() === "") {
      setSearchQuery("");
      setCurrentPage(1);
      return;
    }

    const handler = setTimeout(() => {
      setSearchQuery(inputValue);
      setCurrentPage(1);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

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
          `/words/all?page=${currentPage}&limit=${limit}&keyword=${searchQuery}&category=${selectedCategory}`,
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
  }, [currentPage, searchQuery, selectedCategory]);
  return (
    <div className={styles.container}>
      <div className={styles.filtersSection}>
        <div className={styles.controlsGroup}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder="Find the word"
              className={styles.input}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Icon id="icon-search" size={20} className={styles.searchIcon} />
          </div>

          <Select
            options={categoryOptions}
            value={selectedCategory}
            onChange={(val) => {
              setSelectedCategory(val);
              setCurrentPage(1);
            }}
            className={styles.customSelect}
          />
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

      <div className="bg-white rounded-[30px] min-h-[450px] pb-10 relative overflow-hidden">
        {isLoading && (
          <div className={styles.loaderOverlay}>
            <div className={styles.loaderBookWrapper}>
              <Loader />
            </div>
            <p className={styles.loaderText}>Завантаження знань...</p>
          </div>
        )}

        <WordsTable words={words} />

        {totalPages > 1 && (
          <div className={styles.paginationSection}>
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
