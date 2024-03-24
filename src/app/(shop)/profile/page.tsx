import { auth } from '@/auth.config';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    //redirect(`/auth/login?redirectTo=profile`);
    redirect(`/auth/login`);
  }
  return (
    <>
      <div className="py-4 px-2 md:px-4 xl:px-6 text-sm border-b border-black sticky top-[65px] md:top-[81px] bg-white z-10 flex items-center gap-3">
        <Image
          src={`/address-image.jpg`}
          alt="profile pic"
          width={32}
          height={32}
          className="object-cover rounded-full w-[32px] h-[32px]"
        />
        Hello {session?.user?.name}!
      </div>
    </>
  );
}
