import { getServerSession } from 'next-auth';
import { montserrat } from '../app/fonts/fonts';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { User } from '@nextui-org/react';
import SignOutButton from './signOutButton';

type HeaderTypes = {
  title: string;
  subtitle: string;
};

export default async function Header({ title, subtitle }: HeaderTypes) {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex w-full py-14 justify-between px-10">
      <div>
        <h1 className={`${montserrat.className} text-4xl`}>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className='flex gap-5'>
      {session?.user && (
        <User
          name={session.user.name ?? "Usuario"}
          description={session.user.email ?? "Sin correo"}
          avatarProps={{ src: session.user.image ?? undefined }} // Manejo de null
        />
      )}
      <SignOutButton />
      </div>
    </div>
  );
}
