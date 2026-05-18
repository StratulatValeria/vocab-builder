"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Word } from "@/lib/type/types";
import { Modal } from "@/components/ui/Modal/Modal"; // Імпортуємо твій UI Modal
import styles from "./EditWordModal.module.css";

interface EditWordModalProps {
  word: Word | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: string, data: { en: string; ua: string }) => Promise<void>;
}

interface IEditForm {
  en: string;
  ua: string;
}

export const EditWordModal = ({
  word,
  isOpen,
  onClose,
  onSave,
}: EditWordModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IEditForm>();

  // Коли модалка відкривається з конкретним словом — підставляємо його в інпути
  useEffect(() => {
    if (word && isOpen) {
      reset({
        en: word.en,
        ua: word.ua,
      });
    }
  }, [word, isOpen, reset]);

  const onSubmit = async (data: IEditForm) => {
    if (!word) return;
    await onSave(word._id, {
      en: data.en.trim(),
      ua: data.ua.trim(),
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Тут рендериться ТІЛЬКИ контент форми, хрестик і бекдроп уже всередині твого UI Modal! */}
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Edit word</h2>
        <p className={styles.subtitle}>
          Change the translation or spelling of the word.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputWrapper}>
            <label className={styles.label}>English</label>
            <input
              {...register("en", {
                required: "This field is required",
                pattern: {
                  value: /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/,
                  message: "Invalid English format",
                },
              })}
              className={errors.en ? styles.inputError : styles.input}
            />
            {errors.en && (
              <span className={styles.errorText}>{errors.en.message}</span>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Ukrainian</label>
            <input
              {...register("ua", {
                required: "This field is required",
                pattern: {
                  value: /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u,
                  message: "Invalid Ukrainian format",
                },
              })}
              className={errors.ua ? styles.inputError : styles.input}
            />
            {errors.ua && (
              <span className={styles.errorText}>{errors.ua.message}</span>
            )}
          </div>

          <div className={styles.btnGroup}>
            <button className={styles.submitBtn} type="submit">
              Save
            </button>
            <button
              className={styles.cancelBtn}
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
