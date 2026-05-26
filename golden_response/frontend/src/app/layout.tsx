import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://luxe-realestate.com'),
  title: {
    default: 'LUXE Real Estate — Premium Properties Worldwide',
    template: '%s | LUXE Real Estate',
  },
  description:
    'Discover the world\'s most exceptional properties. LUXE Real Estate offers a curated portfolio of luxury villas, penthouses, and residences across global destinations.',
  keywords: ['luxury real estate', 'premium properties', 'villas', 'penthouses', 'global properties'],
  authors: [{ name: 'LUXE Real Estate' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'LUXE Real Estate',
    title: 'LUXE Real Estate — Premium Properties Worldwide',
    description: 'Discover the world\'s most exceptional properties.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUXE Real Estate',
    description: 'Discover the world\'s most exceptional properties.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#f59e0b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
