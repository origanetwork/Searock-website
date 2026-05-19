import type { Metadata } from "next";
import "./globals.css";
import Preloader from "./(landing)/_components/shared/preloader";

export const metadata: Metadata = {
  title: "Searock Web",
  description: "Searock - Your Trusted Tile Gallery",
  icons: {
    icon: [
      { url: "/images/home/searock-icon.png", type: "image/png", sizes: "48x48" },
      { url: "/images/home/searock-icon.png", type: "image/png", sizes: "96x96" },
      { url: "/images/home/searock-icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      {
        url: "/images/home/searock-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    shortcut: "/images/home/searock-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/home/searock-icon.png" type="image/png" />
        <link rel="shortcut icon" href="/images/home/searock-icon.png" type="image/png" />
      </head>
      <body className="antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
