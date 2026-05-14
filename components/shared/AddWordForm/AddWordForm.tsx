"use client";

import { useForm, Controller, useWatch } from "react-hook-form";
import { Select } from "@/components/ui/Select/Select";
import { Icon } from "@/components/ui/Icon";
import { Input } from "@/components/ui/Input/Input";
import { IAddWordForm, AddWordFormProps } from "@/lib/type/types";
import styles from "./AddWordForm.module.css";

export const AddWordForm = ({
  categories,
  onSuccess,
  onCancel,
}: AddWordFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAddWordForm>({
    defaultValues: {
      en: "",
      ua: "",
      category: "",
      isIrregular: false,
    },
  });

  const selectedCategory = useWatch({
    control,
    name: "category",
  });

  const onSubmit = async (data: IAddWordForm) => {
    try {
      const formattedData = {
        ...data,
        isIrregular: String(data.isIrregular) === "true",
      };

      console.log("Дані для відправки:", formattedData);
      // await api.post('/words/create', formattedData);
      onSuccess();
    } catch (error) {
      console.error("Помилка додавання слова:", error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Add word</h2>
      <p className={styles.description}>
        Introducing a new word for learning involves providing its definition,
        English translation, and examples of usage.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.mainFields}>
          <Controller
            name="category"
            control={control}
            rules={{ required: "Category is required" }}
            render={({ field }) => (
              <Select
                options={categories.map((c: string) => ({
                  value: c,
                  label: c.charAt(0).toUpperCase() + c.slice(1),
                }))}
                value={field.value}
                onChange={field.onChange}
                placeholder="Categories"
              />
            )}
          />

          {selectedCategory === "verb" && (
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  {...register("isIrregular")}
                  type="radio"
                  value="false"
                  defaultChecked
                />
                <span className={styles.radioText}>Regular</span>
              </label>
              <label className={styles.radioLabel}>
                <input {...register("isIrregular")} type="radio" value="true" />
                <span className={styles.radioText}>Irregular</span>
              </label>
            </div>
          )}

          <Input
            {...register("ua", { required: "Required field" })}
            placeholder="Ukrainian"
            className={styles.modalInput}
            error={errors.ua?.message}
            rightElement={
              <>
                <Icon id="icon-ukraine" size={32} />
                <span className={styles.langText}>Ukrainian</span>
              </>
            }
          />

          <Input
            {...register("en", {
              required: "Required field",
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Only English letters",
              },
            })}
            placeholder="English"
            className={styles.modalInput}
            error={errors.en?.message}
            rightElement={
              <>
                <Icon id="icon-united-kingdom" size={32} />
                <span className={styles.langText}>English</span>
              </>
            }
          />
        </div>

        <div className={styles.formActions}>
          <button type="submit" className={styles.submitBtn}>
            Add
          </button>
          <button type="button" className={styles.cancelBtn} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
