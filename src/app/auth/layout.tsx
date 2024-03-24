import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (session?.user) {
    redirect('/');
  }
  return (
    <main lang="en">
      <div>{children}</div>
    </main>
  );
}
