import { forwardRef, useState } from "react";
import { Icon } from "../Icon";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  rightElement?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, type, className, rightElement, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    return (
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            type={inputType}
            className={`${styles.input} 
              ${error ? styles.inputError : ""} 
              ${rightElement ? styles.inputWithRightElement : ""} 
              ${className}`}
            {...props}
          />

          {/* Елемент праворуч  */}
          {rightElement ? (
            <div className={styles.rightElement}>{rightElement}</div>
          ) : (
            isPassword && (
              <button
                type="button"
                className={styles.iconBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                <Icon
                  id={showPassword ? "icon-eye" : "icon-eye-off"}
                  size={20}
                />
              </button>
            )
          )}
        </div>

        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    );
  },
);
Input.displayName = "Input";
