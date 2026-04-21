"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, LoginFormData } from "@/utils/validationSchemas";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { useAuthStore } from "@/lib/store/useAuthStore";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./RegisterForm.module.css";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const loginUser = useAuthStore((state) => state.login);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      await loginUser(data);
      router.push("/dictionary");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "Login failed");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputWrapper}>
        <input
          {...register("email")}
          placeholder="Email"
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
        />
        {errors.email && (
          <p className={styles.errorText}>{errors.email.message}</p>
        )}
      </div>

      <div className={styles.inputWrapper}>
        <input
          {...register("password")}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={styles.passwordBtn}
        >
          <Icon id={showPassword ? "icon-eye-off" : "icon-eye"} size={20} />
        </button>
        {errors.password && (
          <p className={styles.errorText}>{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={styles.submitBtn}
      >
        {isSubmitting ? "Logging in..." : "Log In"}
      </button>
    </form>
  );
}
