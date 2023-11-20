import { Baloo_2, Poppins, Overpass } from 'next/font/google'
 
export const baloo = Baloo_2({
    display: 'swap',
    subsets: ['latin'],
    weight: '700',
    variable: '--font-baloo'
});
  
export const poppins = Poppins({
    display: 'swap',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins'
});

export const overpass = Overpass({
    display: 'swap',
    subsets: ['latin'],
    weight: '700',
    variable: '--font-overpass'
});