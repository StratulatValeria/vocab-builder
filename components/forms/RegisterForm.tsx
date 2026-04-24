// "use client";

// import axios from "axios";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { registerSchema, RegisterFormData } from "@/utils/validationSchemas";
// import { useState } from "react";
// import { Icon } from "@/components/ui/Icon";
// import styles from "./RegisterForm.module.css";
// import { useAuthStore } from "@/lib/store/useAuthStore";
// import { useRouter } from "next/navigation";

// interface ApiError {
//   message: string;
// }

// export default function RegisterForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const registerUser = useAuthStore((state) => state.register);
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<RegisterFormData>({
//     resolver: yupResolver(registerSchema),
//   });
//   const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
//     try {
//       await registerUser(data);
//       router.push("/dictionary");
//     } catch (error) {
//       if (axios.isAxiosError<ApiError>(error)) {
//         const serverMessage = error.response?.data?.message;
//         alert(serverMessage || "Registration failed");
//       } else {
//         alert("An unexpected error occurred");
//       }
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
//       <div className={styles.inputWrapper}>
//         <input
//           {...register("name")}
//           placeholder="Name"
//           className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
//         />
//         {errors.name && (
//           <p className={styles.errorText}>{errors.name.message}</p>
//         )}
//       </div>

//       <div className={styles.inputWrapper}>
//         <input
//           {...register("email")}
//           placeholder="Email"
//           className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
//         />
//         {errors.email && (
//           <p className={styles.errorText}>{errors.email.message}</p>
//         )}
//       </div>

//       <div className={styles.inputWrapper}>
//         <input
//           {...register("password")}
//           type={showPassword ? "text" : "password"}
//           placeholder="Password"
//           className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
//         />
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className={styles.passwordBtn}
//         >
//           <Icon id={showPassword ? "icon-eye-off" : "icon-eye"} size={20} />
//         </button>
//         {errors.password && (
//           <p className={styles.errorText}>{errors.password.message}</p>
//         )}
//       </div>

//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className={styles.submitBtn}
//       >
//         {isSubmitting ? "Registering..." : "Register"}
//       </button>
//     </form>
//   );
// }
"use client";

import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema, RegisterFormData } from "@/utils/validationSchemas";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./RegisterForm.module.css";
import { useAuthStore } from "@/lib/store/useAuthStore";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface ApiError {
  message: string;
}

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const registerUser = useAuthStore((state) => state.register);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    try {
      await registerUser(data);
      toast.success("Registration successful!");
      reset();
      router.push("/dictionary");
    } catch (error) {
      if (axios.isAxiosError<ApiError>(error)) {
        const serverMessage = error.response?.data?.message;
        toast.error(serverMessage || "Registration failed");
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
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
          <Icon id={showPassword ? "icon-eye" : "icon-eye-off"} size={20} />
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
        {isSubmitting ? "Registering..." : "Register"}
      </button>
    </form>
  );
}
