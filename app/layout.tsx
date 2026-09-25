import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://shruthithakur.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shruti Thakur | Frontend Developer & Full-Stack Developer",
  description:
    "Portfolio of Shruti Thakur, a frontend and full-stack developer building modern, responsive and scalable web experiences using React, Next.js, TypeScript and Node.js.",
  keywords: [
    "Shruti Thakur",
    "Frontend Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Shruti Thakur" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Shruti Thakur | Frontend Developer & Full-Stack Developer",
    description:
      "Portfolio of Shruti Thakur, a frontend and full-stack developer building modern, responsive and scalable web experiences using React, Next.js, TypeScript and Node.js.",
    url: siteUrl,
    siteName: "Shruti Thakur — Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shruti Thakur | Frontend Developer & Full-Stack Developer",
    description:
      "Portfolio of Shruti Thakur, a frontend and full-stack developer building modern, responsive and scalable web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased bg-bg text-ink">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}