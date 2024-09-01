import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/cartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChicNest",
  description:
    "Discover the latest in fashion with ChicNest—your ultimate destination for stylish and trendy clothing. Shop a curated collection of high-quality fashion items for all genders and elevate your wardrobe with ease. Explore our exclusive selections and embrace your unique style today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
