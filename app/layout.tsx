import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zyrenox | Technology Product Lab",
  description:
    "Zyrenox is building AI-native products, automation platforms, creative systems, commerce engines, developer tools, and future product categories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
