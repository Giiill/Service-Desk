import type { Metadata } from "next";
import "./globals.css";
import { SideNavigation } from "./components/SideNavigation/SideNavigation";
import { TopBar } from "./components/TopBar/TopBar";
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})

export const metadata: Metadata = {
  title: "Service Desk",
  description: `Service Desk - Мощное приложение для управления заявками и обслуживанием клиентов.
  Упростите процесс поддержки пользователей, отслеживайте заявки, и обеспечьте оперативное решение проблем.
  Service Desk - ваш надежный партнер в обслуживании клиентов.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <SideNavigation />
        <main className="container">
          <TopBar />
          {children}
        </main>
      </body>
    </html>
  );
}
