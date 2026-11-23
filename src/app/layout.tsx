import type { Metadata } from "next";
import { Archivo, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "700", "800"],
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "TAH Fashion",
  description: "TAH Fashion — thời trang tối giản cho nam và nữ.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${archivo.variable} ${beVietnam.variable}`}>{children}</body>
    </html>
  );
}
