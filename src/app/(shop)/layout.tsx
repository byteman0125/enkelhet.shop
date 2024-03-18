import { Navbar } from '@/components';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      {children}
    </main>
  );
}
