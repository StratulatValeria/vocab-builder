"use client";

import { useState } from "react";
import { Word } from "@/lib/type/types";
import { Icon } from "@/components/ui/Icon";
import styles from "./WordsTable.module.css";

interface WordsTableProps {
  words: Word[];
}

export const WordsTable = ({ words }: WordsTableProps) => {
  const [activeWordId, setActiveWordId] = useState<string | null>(null);

  const toggleMenu = (id: string) => {
    setActiveWordId(activeWordId === id ? null : id);
  };

  if (!words || words.length === 0) {
    return (
      <div className="p-10 text-center text-gray-500 bg-white rounded-[15px]">
        Слів поки немає. Спробуйте змінити фільтри.
      </div>
    );
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>
              <div className={styles.headerContent}>
                Word <Icon id="icon-united-kingdom" size={32} />
              </div>
            </th>
            <th className={styles.th}>
              <div className={styles.headerContent}>
                Translation <Icon id="icon-ukraine" size={32} />
              </div>
            </th>
            <th className={styles.th}>Category</th>
            <th className={styles.th}>Progress</th>
            <th className={styles.th}></th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {words.map((word: Word) => (
            <tr key={word._id} className={styles.tr}>
              <td className={styles.td}>{word.en}</td>
              <td className={styles.td}>{word.ua}</td>
              <td className={styles.td}>{word.category}</td>
              <td className={styles.td}>
                <div className={styles.progressWrapper}>
                  <span>{word.progress}%</span>
                  <div
                    className={styles.circularProgress}
                    style={{
                      background: `conic-gradient(#85AA9F ${word.progress}%, #D1D5DB 0)`,
                    }}
                  ></div>
                </div>
              </td>
              <td className={styles.td}>
                <div className={styles.actionsWrapper}>
                  <button
                    className={styles.moreBtn}
                    onClick={() => toggleMenu(word._id)}
                  >
                    <Icon id="icon-Date" size={20} />
                  </button>

                  {activeWordId === word._id && (
                    <div className={styles.dropdownMenu}>
                      <button className={styles.menuItem}>
                        <Icon
                          id="icon-edit"
                          size={16}
                          className={styles.editIcon}
                        />
                        <span>Edit</span>
                      </button>
                      <button className={styles.menuItem}>
                        <Icon
                          id="icon-trash"
                          size={16}
                          className={styles.deleteIcon}
                        />
                        <span>Delete</span>
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
