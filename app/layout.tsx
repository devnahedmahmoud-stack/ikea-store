import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "sonner";
import { Suspense } from "react";
import Loading from "./loading";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furniture & Home Decore - IKEA",
  description: "Next.ts App",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable)}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        <Suspense fallback={<Loading/>}>
        {children}  
        </Suspense>
        <Footer/>      
        <Toaster position="top-right" closeButton duration={3000}  toastOptions={
          {
            style:{
              background:"black",
              color:"white",
              textAlign:"center",
              fontSize:"16px",
              fontWeight:"bold",
              borderRadius:"8px",
              padding:"12px 20px"
            }
          }
          
        }/> 
      </body>
      
    </html>
  );
}
