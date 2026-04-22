"use client";

// import { useAuthStore } from "@/lib/store/useAuthStore";
import { Icon } from "@/components/ui/Icon";
import styles from "./DictionaryPage.module.css";
import { WordsTable } from "@/components/shared/WordsTable";

export default function DictionaryPage() {
  // const user = useAuthStore((state) => state.user);

  return (
    <div className={styles.container}>
      <div className={styles.filtersSection}>
        {/* Блок пошуку та селекта */}
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
            </select>
          </div>
        </div>

        {/* Блок статистики та кнопок */}
        <div className={styles.statisticsAndActions}>
          <div className={styles.stats}>
            <span className="text-[#121417]/50">To study:</span>
            <span className={styles.statsValue}>20</span>
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

      {/* Таблиця */}
      <div className="bg-white rounded-[30px] min-h-[400px]">
        <WordsTable />
      </div>
    </div>
  );
}
