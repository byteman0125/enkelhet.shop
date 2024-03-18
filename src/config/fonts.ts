import { Fira_Mono, Inter } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const fira_mono = Fira_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-fira',
});
