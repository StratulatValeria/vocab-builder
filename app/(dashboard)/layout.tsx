import { Header } from "@/components/navigation/Header/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-[88px]"> {children}</main>
    </>
  );
}
