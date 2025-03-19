import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/provider/ConvexClientProvider";
import { Toaster } from "@/components/ui/sonner";
import ModalProvider from "@/provider/ModalProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vero | Real-Time Collaboration, Simplified",
  description:
    "Vero is an ultra-fast, collaborative whiteboard designed for teams to ideate, sketch, and brainstorm in real time. With a sleek, intuitive interface and seamless cloud synchronization, Vero ensures that ideas flow effortlessly—whether you're mapping out strategies, wireframing designs, or conducting interactive workshops. Experience instant updates, AI-assisted organization, and frictionless teamwork, no matter where you are. Stay in sync, think faster, and create together with Vero.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>
          <ModalProvider />
          <Toaster />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
