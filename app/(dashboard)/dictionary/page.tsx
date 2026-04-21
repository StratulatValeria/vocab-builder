"use client";

import { useAuthStore } from "@/lib/store/useAuthStore";

export default function DictionaryPage() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Мій Словник</h1>
      <p className="text-gray-600">
        Вітаємо,{" "}
        <span className="font-semibold text-brand-green">{user.name}</span>! Ти
        успішно увійшла в систему.
      </p>

      <div className="mt-10 border-2 border-dashed border-gray-200 rounded-xl h-64 flex items-center justify-center text-gray-400">
        Тут скоро будуть твої слова...
      </div>
    </div>
  );
}
