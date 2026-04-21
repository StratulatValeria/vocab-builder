import LoginForm from "@/components/forms/LoginForm";
import { Logo } from "@/components/ui/Logo/Logo";
import Image from "next/image";
import Link from "next/link";
import styles from "../register/RegisterPage.module.css";

export default function LoginPage() {
  return (
    <main className={styles.container}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.formCard}>
          <h1 className={styles.title}>Login</h1>
          <p className={styles.subtitle}>
            Please enter your login details to continue using our service:
          </p>

          <LoginForm />

          <Link href="/register" className={styles.loginLink}>
            Register
          </Link>
        </div>

        <div className={styles.imageSection}>
          <Image
            src="/img/illustration (1).webp"
            alt="Illustration"
            width={498}
            height={437}
          />
        </div>
      </div>
    </main>
  );
}
