'use client';
import { logout } from '@/actions';
import { useUiStore } from '@/store';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { navItems } from '../Navbar/navItems';

export const Sidebar = () => {
  const { isSidemenuOpen, closeSideMenu } = useUiStore();
  const { data: session } = useSession();
  const { series } = useParams();
  const pathname = usePathname();
  const isAuthenticated = !!session?.user;
  const isAdmin = session?.user.role === 'admin';

  console.log(pathname);

  return (
    isSidemenuOpen && (
      <>
        <div
          className="fixed top-0 left-0 w-full h-screen z-20 bg-black opacity-30"
          onClick={closeSideMenu}
        />
        <div className="fixed top-0 right-0 md:w-[400px] h-screen bg-white z-20 w-full">
          <div className="h-[65px] md:h-[81px] border-b border-black flex items-center justify-end py-4 pr-5">
            <button onClick={closeSideMenu}>CLOSE</button>
          </div>
          <ul className="flex flex-col gap-5 p-6 md:hidden">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`/series/${label}`}
                  className={`hover:underline underline-offset-2 ${series === label ? 'underline' : ''}`}
                  onClick={() => {
                    closeSideMenu();
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <hr />
          <nav className="p-6 flex flex-col gap-5">
            <ul className="flex flex-col gap-5">
              {isAuthenticated && (
                <>
                  <li>
                    <Link
                      href={`/orders`}
                      onClick={() => {
                        closeSideMenu();
                      }}
                      className={`${pathname === '/orders' ? 'underline underline-offset-4' : ''}`}
                    >
                      My Orders
                    </Link>
                  </li>
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
                </>
              )}

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
            </ul>
            {isAdmin && (
              <>
                <hr />
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-300 rounded-full" />
                  <p>Admin panel</p>
                </div>
                <Link
                  className={`${pathname === '/admin/products' ? 'underline underline-offset-4' : ''}`}
                  href={`/admin/products`}
                  onClick={() => {
                    closeSideMenu();
                  }}
                >
                  Products
                </Link>
                <Link
                  href={`/admin/orders`}
                  className={`${pathname === '/admin/orders' ? 'underline underline-offset-4' : ''}`}
                  onClick={() => {
                    closeSideMenu();
                  }}
                >
                  Orders
                </Link>
                <Link
                  href={`/admin/users`}
                  className={`${pathname === '/admin/users' ? 'underline underline-offset-4' : ''}`}
                  onClick={() => {
                    closeSideMenu();
                  }}
                >
                  Users
                </Link>
              </>
            )}
          </nav>
        </div>
      </>
    )
  );
};
