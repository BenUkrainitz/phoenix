import type { Metadata } from "next";
import { Assistant, Marcellus, Montserrat } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Transition from "@/components/Transition/Transition";
import PageTransition from "@/components/Transition/PageTransition";
import { CursorProvider } from "@/context/CursorContext";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-assistant",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default:
      "פניקס - קליניקה לאסתטיקה וקוסמטיקה | פינוק מלכותי ומקצועיות ללא פשרות",
    template: "%s | פניקס קוסמטיקה",
  },
  description:
    "פינוק מלכותי ומקצועיות ללא פשרות. פניקס - קליניקה לאסתטיקה וקוסמטיקה בדימונה מציעה ספא ראש יפני, הסרת שיער בלייזר, טיפולי פנים וטיפולים מותאמים אישית.",
  keywords: [
    "פניקס",
    "קוסמטיקה דימונה",
    "ספא ראש יפני",
    "הסרת שיער בלייזר",
    "טיפולי פנים",
    "קליניקה לאסתטיקה",
    "Phoenix Cosmetology",
    "קוסמטיקאית דימונה",
    "טיפוח ועור הפנים",
  ],
  authors: [
    {
      name: "Phoenix Cosmetology",
    },
  ],
  creator: "Phoenix Cosmetology",
  publisher: "Phoenix Cosmetology",
  applicationName: "Phoenix Cosmetology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "/",
    siteName: "Phoenix Cosmetology - פניקס קליניקה לאסתטיקה",
    title: "פניקס - קליניקה לאסתטיקה וקוסמטיקה | פינוק מלכותי ומקצועיות ללא פשרות",
    description:
      "פינוק מלכותי ומקצועיות ללא פשרות. ספא ראש יפני, הסרת שיער בלייזר וטיפולי פנים מתקדמים בדימונה.",
    images: [
      {
        url: "/assets/home/img.png",
        width: 864,
        height: 650,
        alt: "פניקס - קליניקה לאסתטיקה וקוסמטיקה",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "פניקס - קליניקה לאסתטיקה וקוסמטיקה",
    description:
      "פינוק מלכותי ומקצועיות ללא פשרות. ספא ראש יפני, הסרת שיער בלייזר וטיפולי פנים מתקדמים בדימונה.",
    images: ["/assets/home/img.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "Beauty & Skincare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="h-screen">
      <body
        className={`${assistant.variable} ${marcellus.variable} ${montserrat.variable} overflow-x-hidden`}
      >
        <CursorProvider>
          <Transition />
          <Header />
          <PageTransition>{children}</PageTransition>
        </CursorProvider>
      </body>
    </html>
  );
}
