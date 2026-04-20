import RegisterForm from "@/components/forms/RegisterForm";

import { Logo } from "@/components/ui/Logo/Logo";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F8F8F8] p-4">
      <div className="w-full max-w-[600px] bg-white rounded-[30px] p-8 md:p-16 shadow-sm">
        <div className="flex flex-col items-center mb-8">
          <Logo className="mb-4" />
          <h1 className="text-3xl font-bold text-brand-black mb-2">
            Registration
          </h1>
          <p className="text-brand-black/50 text-center">
            To unlock all of our features, please register and create your
            account
          </p>
        </div>

        <RegisterForm />

        <p className="mt-6 text-center text-brand-black/50">
          Already have an account?{" "}
          <a href="/login" className="text-brand-green font-bold underline">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}
