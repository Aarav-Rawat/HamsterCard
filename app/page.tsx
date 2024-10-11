import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newz from "@/components/Newz";
import { Fredoka } from 'next/font/google';


const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--fredoka-font', 
});


export default function Home() {
  return (
    <main className={`${fredoka.className}  `}>
      <Navbar/>
      <Hero/>
      <Newz/>
    </main>
  );
}
