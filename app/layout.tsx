import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auréa Spa & Wellness — Marylebone, London",
  description: "Expert massage, bespoke facials and restorative spa rituals in Marylebone, London.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
