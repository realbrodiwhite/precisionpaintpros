
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/navigation/header';
import { SiteFooter } from '@/components/navigation/footer';
import { AuthProvider } from '@/hooks/use-auth';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Precision Paint Pros Hub',
  description: 'Website for Precision Paint Pros, based in Monte Vista Colorado',
  keywords: ['Precision Paint Pros', 'Painting', 'Monte Vista Colorado', 'Home Improvement', 'Painting Services'],
  authors: [{name: 'Precision Paint Pros'}],
  creator: 'Precision Paint Pros',
  publisher: 'Precision Paint Pros',
  metadataBase: new URL('https://precisionpaintpros.com'),
  openGraph: {
    title: 'Precision Paint Pros Hub',
    description: 'Website for Precision Paint Pros, based in Monte Vista Colorado',
    url: 'https://precisionpaintpros.com',
    siteName: 'Precision Paint Pros Hub',
    images: [
      {
        url: 'https://picsum.photos/1200/630', // Replace with your actual image
        width: 1200,
        height: 630,
        alt: 'Precision Paint Pros',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': 'standard',
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precision Paint Pros Hub',
    description: 'Website for Precision Paint Pros, based in Monte Vista Colorado',
    images: ['https://picsum.photos/1200/630'], // Replace with your actual image
    creator: '@PrecisionPaint',
  },
  verification: {
    google: 'google', // Add your google verification
    yandex: 'yandex', // Add your yandex verification
    yahoo: 'yahoo', // Add your yahoo verification
    bing: 'bing', // Add your bing verification
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </AuthProvider>
      </body>
    </html>
  );
}
