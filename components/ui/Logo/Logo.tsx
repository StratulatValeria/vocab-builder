import Link from "next/link";
import { Icon } from "../Icon";
import styles from "./Logo.module.css";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link href="/" className={`${styles.logoLink} ${className}`}>
      <Icon id="icon-Logo" className={styles.logoIcon} />
      <span className={styles.logoText}>VocabBuilder</span>
    </Link>
  );
};
