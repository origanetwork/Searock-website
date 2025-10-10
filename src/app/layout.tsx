import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Searock Web",
  description: "A Next.js app with TypeScript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
