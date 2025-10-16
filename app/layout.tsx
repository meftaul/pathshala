import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: {
    default: "Pathshala - পাঠশালা | Bangla Math & Science Learning Platform",
    template: "%s | Pathshala - পাঠশালা"
  },
  description: "Pathshala is a fun and interactive Bangla-English educational platform for children. Learn Math and Science through engaging games, quizzes, and activities. Perfect for Bangladeshi students.",
  keywords: [
    "Pathshala",
    "পাঠশালা",
    "Bangla education",
    "Math learning",
    "Science education",
    "Bangladesh education",
    "Children learning",
    "Interactive learning",
    "Educational games",
    "Math games",
    "Science quizzes",
    "Bangla math",
    "গণিত শিক্ষা",
    "বিজ্ঞান শিক্ষা",
    "শিশু শিক্ষা",
    "অনলাইন শিক্ষা"
  ],
  authors: [{ name: "Pathshala Team" }],
  creator: "Pathshala",
  publisher: "Pathshala",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pathshala.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pathshala.com",
    title: "Pathshala - পাঠশালা | Bangla Math & Science Learning Platform",
    description: "Pathshala is a fun and interactive Bangla-English educational platform for children. Learn Math and Science through engaging games, quizzes, and activities.",
    siteName: "Pathshala",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pathshala - Bangla Math & Science Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathshala - পাঠশালা | Bangla Math & Science Learning Platform",
    description: "Pathshala is a fun and interactive Bangla-English educational platform for children. Learn Math and Science through engaging games, quizzes, and activities.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} antialiased`}>{children}</body>
    </html>
  );
}
