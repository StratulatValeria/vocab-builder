import RegisterForm from "@/components/forms/RegisterForm";
import { Logo } from "@/components/ui/Logo/Logo";
import Image from "next/image";
import Link from "next/link";
import styles from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <main className={styles.container}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.formCard}>
          <div className={styles.textSection}>
            <h1 className={styles.title}>Register</h1>
            <p className={styles.subtitle}>
              To start using our services, please fill out the registration form
              below. All fields are mandatory:
            </p>
          </div>
          <RegisterForm />

          <Link href="/login" className={styles.loginLink}>
            Login
          </Link>
        </div>

        <div className={styles.imageSection}>
          <Image
            src="/img/illustration (1).webp"
            alt="Students"
            width={498}
            height={437}
          />
          <p className={styles.imageLabels}>
            Word · Translation · Grammar · Progress
          </p>
        </div>
      </div>
    </main>
  );
}
