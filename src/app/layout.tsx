import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import { instrumentSerif, rethinkSans } from "./fonts";

import Footer from "./footer/Footer";
import CustomCursor from "./Components/CustomCursor";
import TawkLoader from "./Components/TawkLoader";

export const metadata: Metadata = {
  title: "CircleX Pvt Ltd",
  description: "Empowering your business with cutting-edge technology.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${rethinkSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-sans antialiased">
        <CustomCursor />
        <main className="w-full">{children}</main>
        <Footer />
        <TawkLoader />
      </body>
    </html>
  );
}
