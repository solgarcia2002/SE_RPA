'use client';

import { signIn } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function GoogleLoginButton() {
  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
      className="flex items-center justify-center w-full max-w-xs px-4 py-4 text-darkGreen bg-white rounded-lg  hover:bg-darkGreen hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
    >
      <FontAwesomeIcon icon={faGoogle} className="mr-3 text-darkGreen hover:text-white" />
      <span>Iniciar sesión con Google</span>
    </button>
  );
}
