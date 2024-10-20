import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Work management",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      suppressHydrationWarning={true}
      suppressContentEditableWarning={true}
    >
      <body
        className={cn(inter.className, "antialiased min-h-screen")}
        suppressHydrationWarning={true}
        suppressContentEditableWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
