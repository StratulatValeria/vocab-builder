"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/useAuthStore";

export default function RootPage() {
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/dictionary");
    } else {
      router.replace("/register");
    }
  }, [isLoggedIn, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F8F8]">
      <div className="animate-pulse text-brand-green font-bold">Loading...</div>
    </div>
  );
}
