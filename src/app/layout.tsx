import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TTJ — Play with skill",
  description: "A skill-first arcade and games platform."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
