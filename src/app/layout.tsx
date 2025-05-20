
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
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
  title: 'Precision Paint Pros, Painting your perfect finish | Monte Vista Colorado',
  description: 'Precision Paint Pros, Painting your perfect finish | Monte Vista, Alamosa, Del Norte, South Fork and more!',
  keywords: ['Precision Paint Pros', 'Local Painters', 'Painting', 'Monte Vista', 'Colorado', 'Alamosa', 'Del Norte', 'South Fork', 'Painting Near Me', 'Interior Paint', 'Exterior Paint', 'Painters Near Me', 'Home Improvement', 'Painting Services'],
  authors: [{name: 'Precision Paint Pros'}],
  creator: 'Brodi White of Brodi Branded for Precision Paint Pros LLC',
  publisher: 'Precision Paint Pros',
  metadataBase: new URL('https://precisionpaintpros.com'),
  openGraph: {
    title: 'Precision Paint Pros Website & Client Dashboard',
    description: 'Precision Paint Pros, Painting your perfect finish | Monte Vista, Alamosa, Del Norte, South Fork and more!',
    url: 'https://precisionpaintpros.com',
    siteName: 'Precision Paint Pros Website & Client Dashboard',
    images: [
      {
        url: '/PrecisionPaintPros.png', //
        width: 1200,
        height: 630,
        alt: 'Precision Paint Pros of Monte Vista Colorado',
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
    title: 'Precision Paint Pros Website & Client Dashboard',
    description: 'Precision Paint Pros, Painting your perfect finish | Monte Vista, Alamosa, Del Norte, South Fork and more!',
    images: [
 {
        url: '/PrecisionPaintPros.png', //
        width: 1200,
        height: 630,
        alt: 'Precision Paint Pros | Painting your perfect finish',
      }],
    creator: '@realbrodiwhite',
  },
  verification: {
    google: 'google', // Add your google verification
    yandex: 'yandex', // Add your yandex verification
    yahoo: 'yahoo', // Add your yahoo verification
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
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

