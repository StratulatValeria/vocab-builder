"use client";

import { useAuthStore } from "@/lib/store/useAuthStore";
import { Logo } from "@/components/ui/Logo/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export const Header = () => {
  const { isLoggedIn, user, logout } = useAuthStore();
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />

        {isLoggedIn && (
          <nav className={styles.nav}>
            <Link
              href="/dictionary"
              className={
                pathname === "/dictionary" ? styles.activeLink : styles.link
              }
            >
              Dictionary
            </Link>
            <Link
              href="/recommend"
              className={
                pathname === "/recommend" ? styles.activeLink : styles.link
              }
            >
              Recommend
            </Link>
            <Link
              href="/training"
              className={
                pathname === "/training" ? styles.activeLink : styles.link
              }
            >
              Training
            </Link>
          </nav>
        )}

        {/* Блок профілю та виходу */}
        <div className={styles.userSection}>
          {isLoggedIn ? (
            <>
              <div className={styles.userInfo}>
                <span className={styles.userName}>{user?.name}</span>
                <div className={styles.avatar}>{/*  іконка юзера */}</div>
              </div>
              <button onClick={logout} className={styles.logoutBtn}>
                Log out →
              </button>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
};
