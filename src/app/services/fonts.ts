import { Geist, Geist_Mono } from 'next/font/google'
import { Roboto } from 'next/font/google';
import { Roboto_Serif, } from 'next/font/google';
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto =  Roboto({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-roboto',
  style: ['normal', 'italic'],
  preload: true,
  adjustFontFallback: true,
})  

const robotoSerif = Roboto_Serif({
  variable: '--font-roboto-serif',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  // display: 'swap',
}) 

export {  roboto, robotoSerif, geistSans, geistMono };