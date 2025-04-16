import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maycon Rodrigues - Full-Stack Developer",
  description: "Desenvolvedor Full-Stack | Transformando Ideias em Código",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
