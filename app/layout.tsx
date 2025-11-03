import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Siddhant Mishra | Portfolio",
  description: "Minimal portfolio built with Next.js & TailwindCSS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
