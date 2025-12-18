import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./style.css";

import Footer from "./footer/Footer";

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
    <html lang="en" data-theme="cupcake">
      <body>
        <main className="h-[80%] flex justify-center">
          {children}
        </main>

        {/* ✅ Tawk.to Live Chat Script (App Router correct way) */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),
                s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/686cc6b01731c019090354cc/1ivkeg916';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />

        <Footer />
      </body>
    </html>
  );
}
