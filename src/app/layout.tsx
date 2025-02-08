import '@fontsource/lato'; // Defaults to 400
import '@fontsource/lora'; // Defaults to 400
import type { Metadata } from 'next';
import React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'College Connect BeWise',
  description:
    'Discover the unique benefits our platform offers to colleges, including enhanced student engagement, streamlined admissions processes, and innovative educational resources. Join us in transforming the future of education.',
  keywords: 'college benefits, student engagement, admissions solutions, educational resources, college transformation',
  robots: 'index, follow',
  openGraph: {
    title: 'Transform Your College Experience with Our Innovative Solutions',
    description:
      'Discover the unique benefits our platform offers to colleges, including enhanced student engagement, streamlined admissions processes, and innovative educational resources.',
    url: 'https://collegeconnect.bewise.in',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transform Your College Experience with Our Innovative Solutions',
    description:
      'Discover the unique benefits our platform offers to colleges, including enhanced student engagement, streamlined admissions processes, and innovative educational resources.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={'antialiased'}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
