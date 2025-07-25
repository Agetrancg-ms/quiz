import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { SoundEffectsProvider } from "./components/SoundEffects";
import SoundToggle from "./components/SoundToggle";
import SoundNotification from "./components/SoundNotification";
import KeyboardShortcuts from "./components/KeyboardShortcuts";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Quiz de Trânsito",
  description: "Teste seus conhecimentos sobre as leis e regras de trânsito",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body className={`${inter.className}`} suppressHydrationWarning>
        <div className="h-screen w-screen flex flex-col bg-white overflow-x-hidden">
          {/* Header */}
          <header className="bg-[#204da5] text-white">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center h-20">
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/emt_logo.png"
                    alt="Logo Agetran"
                    width={158}
                    height={40}
                    className="h-12 w-auto md:h-14 lg:h-16 xl:h-[72px] object-contain"
                    priority
                  />
                </Link>
                <nav className="flex items-center gap-3 sm:gap-6">
                  <Link href="/sobre" className="text-white hover:text-blue-100 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 bg-[#25468973] rounded-lg">
                    Sobre
                  </Link>
                  <Link href="/contato" className="text-white hover:text-blue-100 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 bg-[#25468973] rounded-lg">
                    Contato
                  </Link>
                </nav>
              </div>
            </div>
          </header>

          <SoundEffectsProvider>
            <SoundNotification />
            <KeyboardShortcuts />
            
            {/* Main content */}
            <main className="flex-1">
              {children}
            </main>

            {/* Sound controls */}
            <div className="fixed right-4 bottom-4 flex flex-col gap-3 z-50">
              <SoundToggle />
            </div>
          </SoundEffectsProvider>
        </div>
      </body>
    </html>
  );
}
