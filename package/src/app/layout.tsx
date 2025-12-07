import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import Aoscompo from "@/utils/aos";
import NextTopLoader from 'nextjs-toploader';
import TopBar from "@/components/TopBar";
import Container from "@/components/SharedComponent/Container";
import ToasterContext from './api/contex/ToasetContex'
import DownloadPDF from "@/components/DownloadPDF";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Rohmat Choiruly Anwar | Full Stack Developer',
  description: 'Professional portfolio and CV of Rohmat Choiruly Anwar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <NextTopLoader />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Aoscompo>
              <TopBar />
              <Container>
                {children}
              </Container>
            </Aoscompo>
            <ToasterContext />
          <DownloadPDF />
        </ThemeProvider>
      </body>
    </html>
  );
}
