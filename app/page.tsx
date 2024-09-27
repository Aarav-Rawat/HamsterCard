import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Fredoka } from 'next/font/google';
import {Oswald}  from 'next/font/google'

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--fredoka-font', 
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--oswald-font',
  style: 'normal',
});



export default function Home() {
  return (
    <main className={oswald.className}>
      {/* <Navbar/> */}
      <Hero/>
    </main>
  );
}
