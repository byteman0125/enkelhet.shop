'use client';
import { logout } from '@/actions';
import { useUiStore } from '@/store';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export const Sidebar = () => {
  const { isSidemenuOpen, closeSideMenu } = useUiStore();
  const { data: session } = useSession();

  const isAuthenticated = !!session?.user;

  return (
    isSidemenuOpen && (
      <>
        <div
          className="fixed top-0 left-0 w-full h-screen z-20 bg-black opacity-30"
          onClick={closeSideMenu}
        />
        <div className="fixed top-0 right-0 w-[20vw] h-screen bg-white z-20">
          <div className="h-[65px] md:h-[81px] border-b border-black flex items-center justify-end py-4 pr-5">
            <button onClick={closeSideMenu}>CLOSE</button>
          </div>
          <nav className="p-6 flex flex-col gap-5">
            <ul className="flex flex-col gap-5">
              <li>
                <Link
                  href={`/profile`}
                  onClick={() => {
                    closeSideMenu();
                  }}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href={`/orders`}
                  onClick={() => {
                    closeSideMenu();
                  }}
                >
                  Orders
                </Link>
              </li>
              {!isAuthenticated && (
                <li>
                  <Link
                    href={`/auth/login`}
                    onClick={() => {
                      closeSideMenu();
                    }}
                  >
                    Log In
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li>
                  <Link
                    href={`/`}
                    onClick={() => {
                      logout();
                      closeSideMenu();
                    }}
                  >
                    Log Out
                  </Link>
                </li>
              )}
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
