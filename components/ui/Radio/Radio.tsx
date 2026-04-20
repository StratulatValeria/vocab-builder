import styles from "./Radio.module.css";
interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Radio = ({ label, ...props }: RadioProps) => {
  return (
    <label className={styles.container}>
      <input type="radio" className={styles.realRadio} {...props} />
      <div className={styles.customRadio}>
        <div className={styles.innerCircle} />
      </div>
      <span>{label}</span>
    </label>
  );
};
