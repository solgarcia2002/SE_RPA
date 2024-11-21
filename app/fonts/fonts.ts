import { Roboto } from 'next/font/google';
import { Montserrat } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

export const monserrat = Montserrat({
  weight:['400'],
  subsets:['latin']
})