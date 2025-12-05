import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import Aoscompo from "@/utils/aos";
import NextTopLoader from 'nextjs-toploader';
import TopBar from "@/components/TopBar";
import Container from "@/components/SharedComponent/Container";
import ToasterContext from './api/contex/ToasetContex'
import { EditProvider } from './api/contex/EditContext'
import DownloadPDF from "@/components/DownloadPDF";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Alex Morgan | Senior Full Stack Developer',
  description: 'Professional portfolio and CV of Alex Morgan',
}

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: any
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <EditProvider>
            <Aoscompo>
              <TopBar />
              <Container>
                {children}
              </Container>
            </Aoscompo>
            <ToasterContext />
          </EditProvider>
          <DownloadPDF />
        </ThemeProvider>
      </body>
    </html>
  );
}
