import { getPaginatedUsers } from '@/actions';
import { Pagination } from '@/components';
import { redirect } from 'next/navigation';
import { UserTable } from './ui/UserTable';

export default async function AdminUsersPage() {
  const { ok, users = [] } = await getPaginatedUsers();

  if (!ok) {
    redirect('/auth/login');
  }

  return (
    <>
      <div className="py-4 px-2 md:px-4 xl:px-6 flex items-center justify-between w-full sticky top-[81px] z-10 bg-white border-b border-black">
        <p>USERS - admin</p>
      </div>
      <div className="relative overflow-x-auto mb-12">
        <UserTable users={users} />
      </div>
      <Pagination totalPages={4} />
    </>
  );
}
