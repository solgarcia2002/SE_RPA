'use client'

import { NextUIProvider } from '@heroui-org/react';
import { SessionProvider } from 'next-auth/react';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider >
      <SessionProvider>{children}</SessionProvider>
    </NextUIProvider>
  )
}