import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "Athos Clives | Desenvolvedor Web",
  description:
    "Web developer focused on modern, high-performance, and well-structured interfaces using React and Next.js.",
  keywords: [
    "Web Developer",
    "React",
    "Next.js",
    "Frontend",
    "Portfolio",
  ],
  authors: [{ name: "Athos Clives" }],
  creator: "Athos Clives",
  openGraph: {
    title: "Athos Clives | Web Developer",
    description:
      "Professional portfolio with focus on performance and modern design.",
    siteName: "Athos Clives",
    locale: "pt_BR",
    type: "website",
  },
};
