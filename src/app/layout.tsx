import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Blog",
  description: "Blog criado com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body>{children}</body>
    </html>
  );
}
