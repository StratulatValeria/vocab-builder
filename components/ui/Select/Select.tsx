"use client";
import { useState, useRef, useEffect } from "react";
import { Icon } from "../Icon";
import styles from "./Select.module.css";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}
export const Select = ({
  options,
  value,
  onChange,
  placeholder,
  className,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;
  return (
    <div className={`${styles.container} ${className}`} ref={selectRef}>
      <div className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedLabel}</span>
        <Icon
          id="icon-select-arrow"
          size={20}
          style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
        />
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.option} ${value === option.value ? styles.selectedOption : ""}`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
