import { useWords } from "@/hooks/useWords";
import { Word } from "@/lib/type/types";
import styles from "./WordsTable.module.css";

interface WordsTableProps {
  words: Word[];
}

export const WordsTable = ({ words }: WordsTableProps) => {
  if (!words || words.length === 0)
    return <div className="p-4 text-center">Слів поки немає.</div>;

  // export const WordsTable = () => {
  //   const { data, isLoading, isError } = useWords(1);

  //   if (isLoading) return <div>Завантаження...</div>;
  //   if (isError) return <div>Помилка завантаження.</div>;

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <tbody>
          {words.map((word: Word) => (
            <tr key={word._id}>
              <td className={styles.td}>{word.en}</td>
              <td className={styles.td}>{word.ua}</td>
              <td className={styles.td}>{word.category}</td>
              <td className={styles.td}>
                <div className={styles.progressWrapper}>
                  <span>{word.progress}%</span>
                </div>
              </td>{" "}
              <td className={styles.td}>
                <div className={styles.actions}>
                  <button className={styles.actionBtn}>Edit</button>
                  <button className={styles.actionBtn}>Delete</button>
                </div>
              </td>
            </tr>
          ))}{" "}
        </tbody>
      </table>
    </div>
  );
};
