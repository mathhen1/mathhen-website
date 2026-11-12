import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matheus Henrique - Desenvolvedor Fullstack",
  description: "Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col overflow-x-clip bg-black">
        <Script id="cinematic-intro-prepaint" strategy="beforeInteractive">
          {`(() => {
            const root = document.documentElement;
            const skipCover = () => root.classList.add("cinematic-intro-skip-cover");
            if (window.location.pathname !== "/") {
              skipCover();
              return;
            }
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
              skipCover();
              return;
            }

            try {
              if (window.sessionStorage.getItem("mathen-cinematic-intro")) {
                skipCover();
                return;
              }
            } catch {
              // The intro can still run when session storage is unavailable.
            }

            root.classList.remove("cinematic-intro-skip-cover");
            root.classList.add("cinematic-intro-pending");
            window.setTimeout(() => {
              root.classList.remove("cinematic-intro-pending");
              skipCover();
            }, 10000);
          })();`}
        </Script>
        <noscript>
          <style>{`.reveal,.reveal-r,.reveal-l{opacity:1!important;transform:none!important}[data-intro-boot-cover]{display:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
