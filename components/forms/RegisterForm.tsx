"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema, RegisterFormData } from "@/utils/validationSchemas";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      {/* Name Input */}
      <div className="flex flex-col gap-1">
        <input
          {...register("name")}
          type="text"
          placeholder="Name"
          className={`w-full p-4 rounded-xl border ${
            errors.name ? "border-red-500" : "border-brand-gray"
          } outline-none focus:border-brand-green bg-transparent font-sans`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        )}
      </div>

      {/* Email Input */}
      <div className="flex flex-col gap-1">
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className={`w-full p-4 rounded-xl border ${
            errors.email ? "border-red-500" : "border-brand-gray"
          } outline-none focus:border-brand-green bg-transparent font-sans`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>

      {/* Password Input */}
      <div className="flex flex-col gap-1 relative">
        <input
          {...register("password")}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className={`w-full p-4 rounded-xl border ${
            errors.password ? "border-red-500" : "border-brand-gray"
          } outline-none focus:border-brand-green bg-transparent font-sans`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-4 text-brand-black/50"
        >
          {showPassword ? (
            <Icon id="icon-eye-off" size={20} />
          ) : (
            <Icon id="icon-eye" size={20} />
          )}
        </button>
        {errors.password && (
          <p className="text-red-500 text-xs">{errors.password.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-brand-green text-brand-white py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all mt-4 font-sans"
      >
        Register
      </button>
    </form>
  );
}
