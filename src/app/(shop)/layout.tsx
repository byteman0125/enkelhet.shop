export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="bg-red-500 w-full h-screen">{children}</main>;
}
