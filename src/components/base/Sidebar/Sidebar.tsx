'use client';
import { useUiStore } from '@/store';
import Link from 'next/link';
import { sidebarItems } from './sidebarItems';

export const Sidebar = () => {
  const { isSidemenuOpen, closeSideMenu } = useUiStore();
  return (
    isSidemenuOpen && (
      <>
        <div
          className="fixed top-0 left-0 w-full h-screen z-10 bg-black opacity-30"
          onClick={closeSideMenu}
        />
        <div className="fixed top-0 right-0 w-[20vw] h-screen bg-white z-20">
          <div className="h-[65px] md:h-[81px] border-b border-black flex items-center justify-end py-4 pr-5">
            <button onClick={closeSideMenu}>CLOSE</button>
          </div>
          <nav className="p-6 flex flex-col gap-5">
            <ul className="flex flex-col gap-1">
              {sidebarItems.map(({ label }) => (
                <li key={label}>
                  <Link href={`/${label}`}>{label}</Link>
                </li>
              ))}
            </ul>
            <div className="w-full h-px bg-black my-10" />
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-300 rounded-full" />
              <p>Admin panel</p>
            </div>
            <Link href={`/`}>Products</Link>
            <Link href={`/`}>Orders</Link>
            <Link href={`/`}>Users</Link>
          </nav>
        </div>
      </>
    )
  );
};
