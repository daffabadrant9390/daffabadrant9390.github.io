import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'M. Daffa Badran Thoriq | Personal Portfolio',
  description:
    'This is personal portfolio website created by M. Daffa Badran Thoriq in 2024',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative overflow-hidden ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
