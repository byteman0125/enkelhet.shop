import { Provider } from '@/components';
import { fira_mono, inter } from '@/config/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | ENKELHET - Shop',
    default: 'Home | ENKELHET - Shop',
  },
  description:
    'ENKELHET is a norway-based design studio, which designs and manufactures unique furniture and objects, mainly but not exclusively in wood.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira_mono.variable} ${inter.variable} font-mono`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
