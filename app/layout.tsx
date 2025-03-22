import "./globals.css";
import type { Metadata } from "next";
import { Kalam, Poppins } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import ModalProvider from "@/provider/ModalProvider";
import ConvexClientProvider from "@/provider/ConvexClientProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
});

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin", "latin-ext"],
  style: ["normal"],
  variable: "--font-kalam",
});

export const metadata: Metadata = {
  title: "Vero | Real-Time Collaboration, Simplified",
  description:
    "Vero is an ultra-fast, collaborative whiteboard designed for teams to ideate, sketch, and brainstorm in real time. With a sleek, intuitive interface and seamless cloud synchronization, Vero ensures that ideas flow effortlessly—whether you're mapping out strategies, wireframing designs, or conducting interactive workshops. Experience instant updates, AI-assisted organization, and frictionless teamwork, no matter where you are. Stay in sync, think faster, and create together with Vero.",
  authors: {
    name: "Saikat Samanta",
    url: "https://portfolio-one-gilt-34.vercel.app/",
  },
  keywords: [
    "whiteboard",
    "collaboration",
    "real-time",
    "teamwork",
    "remote work",
    "productivity",
    "design",
    "brainstorming",
    "ideation",
    "sketching",
    "drawing",
    "workshop",
    "strategy",
    "wireframe",
    "cloud",
    "synchronization",
    "miro-clone",
    "miro-clone-github",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vero-three.vercel.app",
    siteName: "Vero",
    title: "Vero | Real-Time Collaboration, Simplified",
    description:
      "Vero is an ultra-fast, collaborative whiteboard designed for teams to ideate, sketch, and brainstorm in real time. With a sleek, intuitive interface and seamless cloud synchronization, Vero ensures that ideas flow effortlessly—whether you're mapping out strategies, wireframing designs, or conducting interactive workshops. Experience instant updates, AI-assisted organization, and frictionless teamwork, no matter where you are. Stay in sync, think faster, and create together with Vero.",
    images: [
      {
        url: "https://github.com/psykat1116/Vero/blob/master/public/OpenGraph.png?raw=true",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${kalam.variable} antialiased`}>
        <ConvexClientProvider>
          <ModalProvider />
          <Toaster />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
