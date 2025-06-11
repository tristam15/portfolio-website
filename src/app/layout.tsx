import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['300', '400', '500', '600', '700', '800'], // Light, Regular, Medium, SemiBold, Bold, ExtraBold
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'], // Light, Regular, Medium, SemiBold, Bold
});

export const metadata: Metadata = {
  title: "Blueprint by Dilip",
  description: "Portfolio of Blueprint by Dilip - Architecture and Design Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${montserrat.variable} h-full`}>
      <body className={`flex flex-col min-h-full antialiased bg-gray-50 text-gray-800`}> 
        <Header />
        <main className="flex-grow py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
