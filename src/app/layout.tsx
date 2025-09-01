import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistema Solar - Presentación Educativa",
  description: "Explora el sistema solar con nuestra presentación interactiva. Descubre planetas, el Sol, y datos fascinantes del espacio.",
  keywords: "sistema solar, planetas, astronomía, espacio, educación, Sol, Tierra, Marte, Júpiter, Saturno",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}