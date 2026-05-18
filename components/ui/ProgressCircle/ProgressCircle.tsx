import React from "react";
import styles from "./ProgressCircle.module.css";

interface ProgressCircleProps {
  percentage: number;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percentage,
}) => {
  const cleanPercentage = Math.min(100, Math.max(0, percentage));

  const radius = 10;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference - (cleanPercentage / 100) * circumference;

  return (
    <div className={styles.progressWrapper}>
      <svg className={styles.svg} width="26" height="26">
        <circle className={styles.bgCircle} cx="13" cy="13" r={radius} />
        <circle
          className={styles.activeCircle}
          cx="13"
          cy="13"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <span className={styles.text}>{cleanPercentage}%</span>
    </div>
  );
};
