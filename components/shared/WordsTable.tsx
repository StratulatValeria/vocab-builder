import styles from "./WordsTable.module.css";
import { Icon } from "../ui/Icon";

export const WordsTable = () => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Word</th>
            <th className={styles.th}>Translation</th>
            <th className={styles.th}>Category</th>
            <th className={styles.th}>Progress</th>
            <th className={styles.th}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td}>Apple</td>
            <td className={styles.td}>Яблуко</td>
            <td className={styles.td}>Verb</td>
            <td className={styles.td}>
              <div className={styles.progressWrapper}>
                <span>100%</span>
              </div>
            </td>
            <td className={styles.td}>
              <div className={styles.actions}>
                <button className={styles.actionBtn}>Edit</button>
                <button className={styles.actionBtn}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
