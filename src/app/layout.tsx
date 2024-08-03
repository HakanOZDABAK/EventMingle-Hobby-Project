"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/layouts/Footer";
import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import Navbar from "@/layouts/Navbar";
import Sidebar from "@/layouts/Sidebar";
import { usePathname } from "next/navigation";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noSidebarRoutes = ["/profile"];

  const showSidebar = !noSidebarRoutes.includes(pathname);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main>
          <div className="grid">
           {showSidebar &&  <div className="col-2"><Sidebar/></div>}
            <div className="col mt-3">{children}</div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
