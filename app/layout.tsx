// import { Outfit } from 'next/font/google';
import localFont from 'next/font/local';
import React from 'react';
import { cn } from '../lib/utils';
import '@/styles/globals.css';

// const outfit = Outfit({
//   subsets: ['latin'],
//   variable: '--font-sans',
//   display: 'swap',
// });

const gilroyFont = localFont({
  variable: '--font-sans',
  src: [
    {
      path: '../assets/fonts/Gilroy-UltraLight.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-Heavy.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'Temitope Aroyewon Portfolio',
  description: 'This is a web application for Temitope Aroyewon Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>Temitope Aroyewon Portfolio</title>
      </head>
      <body className={cn('font-sans', gilroyFont.variable)}>
          {children}
      </body>
    </html>
  );
}
