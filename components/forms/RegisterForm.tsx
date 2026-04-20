"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema, RegisterFormData } from "@/utils/validationSchemas";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputWrapper}>
        <input
          {...register("name")}
          placeholder="Name"
          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
        />
        {errors.name && (
          <p className={styles.errorText}>{errors.name.message}</p>
        )}
      </div>

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

      <button type="submit" className={styles.submitBtn}>
        Register
      </button>
    </form>
  );
}
