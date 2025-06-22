import "../globals.css";
import { ReactNode } from "react";
import { Header } from "../components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen font-sans">
        <Header />
        <main className="p-4 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}

