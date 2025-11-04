import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Searock Web",
  description: "Searock - Your Trusted Tile Gallery",
  icons: {
    icon: [
      { url: "/images/home/searock-white.png", type: "image/png", sizes: "16x16", rel: "icon" },
      { url: "/images/home/searock-white.png", type: "image/png", sizes: "32x32", rel: "icon" },
      { url: "/images/home/searock-white.png", type: "image/png", sizes: "48x48", rel: "icon" },
      { url: "/images/home/searock-white.png", type: "image/png", sizes: "96x96", rel: "icon" },
      { url: "/images/home/searock-white.png", type: "image/png", sizes: "192x192", rel: "icon" },
      { url: "/images/home/searock-white.png", type: "image/png", sizes: "256x256", rel: "icon" },
      { url: "/images/home/searock-white.png", type: "image/png", sizes: "512x512", rel: "icon" },
    ],
    apple: [
      { 
        url: "/images/home/searock-white.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    shortcut: "/images/home/searock-white.png",
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
        <link rel="icon" href="/images/home/searock-white.png" type="image/png" />
        <link rel="shortcut icon" href="/images/home/searock-white.png" type="image/png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
