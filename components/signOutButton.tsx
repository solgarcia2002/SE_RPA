"use client"

import { signOut } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/login' })}
      className="flex items-center justify-center w-full max-w-xs px-4 py-2 text-darkGreen bg-white rounded-lg hover:bg-lighter focus:outline-none focus:ring-2 focus:ring-darkGreen focus:ring-opacity-75"
    >
      <FontAwesomeIcon icon={faArrowRightFromBracket} className="mr-3 text-darkGreen" />
      <span>Salir</span>
    </button>
  );
}