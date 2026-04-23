import RegisterForm from "@/components/forms/RegisterForm";
import { Logo } from "@/components/ui/Logo/Logo";
import Image from "next/image";
import Link from "next/link";
import styles from "./RegisterPage.module.css";
import { Icon } from "@/components/ui/Icon";

export default function RegisterPage() {
  return (
    <main className={styles.container}>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <linearGradient
            id="paint0_linear_6_3058"
            x1="543.72"
            y1="395.96"
            x2="281.79"
            y2="223.489"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#85AA9F" />

            <stop offset="0.5" stopColor="#85AA9F" stopOpacity="0.8" />

            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
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
      <div className={styles.vectorBackdrop}>
        <Icon
          id="icon-bg-glow"
          style={{ fill: "url(#paint0_linear_6_3058)" }}
        />
      </div>
    </main>
  );
}
