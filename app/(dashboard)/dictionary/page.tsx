"use client";
import { useEffect, useState } from "react";
// import { useAuthStore } from "@/lib/store/useAuthStore";
import { Icon } from "@/components/ui/Icon";
import styles from "./DictionaryPage.module.css";
import { WordsTable } from "@/components/shared/WordsTable";
import { api } from "@/lib/api/client";
import { Word } from "@/lib/type/types";

export default function DictionaryPage() {
  // const user = useAuthStore((state) => state.user);

  const [words, setWords] = useState<Word[]>([]);
  const [categories, setCategories] = useState([]);
  const [totalWords, setTotalWords] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDictionaryData = async () => {
      try {
        setIsLoading(true);
        const [catRes, wordsRes] = await Promise.all([
          api.get("/words/categories"),
          api.get("/words/all?page=1&limit=7"),
          // api.get("/words/own?page=1&limit=7"),
        ]);

        setCategories(catRes.data);
        setWords(wordsRes.data.results);
        setTotalWords(wordsRes.data.totalCount || 0);
      } catch (error) {
        console.error("Помилка завантаження словника", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDictionaryData();
  }, []);
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
            <span className={styles.statsValue}>{totalWords}</span>
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

      <div className="bg-white rounded-[30px] min-h-[400px]">
        {isLoading ? (
          <div className="p-10 text-center">Завантаження слів...</div>
        ) : (
          <WordsTable words={words} />
        )}
      </div>
    </div>
  );
}
