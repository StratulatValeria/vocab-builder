import { Header } from "@/components/navigation/Header/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Header />

      <main style={{ marginTop: "88px" }}>{children}</main>
    </div>
  );
}
