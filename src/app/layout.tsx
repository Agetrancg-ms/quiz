import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SoundEffectsProvider } from "./components/SoundEffects";
import { ThemeCustomizer } from "./components/ThemeCustomizer";
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
    <html lang="pt-BR">
      <body className={inter.className}>
        <SoundEffectsProvider>
          <SoundNotification />
          <KeyboardShortcuts />
          {children}
          <ThemeCustomizer />
          <SoundToggle />
        </SoundEffectsProvider>
      </body>
    </html>
  );
}
