import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import LeftSide from '@/components/LeftSide';
import RightSide from '@/components/RightSide';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Experience from '@/components/Experience';
import SmallProjects from '@/components/small-projects/SmallProjects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BigProjects from '@/components/big-projects/BigProjects';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <title>Andrew Duit</title>
        <meta name='description' content='Dive into my awesome world of coding and gaming! Check out my portfolio as a full-stack wizard and game design enthusiast. Experience the perfect mix of tech and creativity right here!' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keywords' content='react, portfolio, nextjs, unreal engine, ue5, vr, engineer, full stack, developer, andrew, duit, andrew duit'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-textDark/5 scrollbar-thumb-textDark/70' >     
        <Navbar />
        <div className='w-full h-[88vh] lg:flex items-center gap-10 justify-between'> 
          <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
            <LeftSide />
          </div>
          <div className='h-[88vh] w-full mx-auto p-4'>
             <Banner />
             <About />
             <Experience />
             <BigProjects />
             <SmallProjects />
             <Contact />
             <Footer />
          </div>
          <div className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
            <RightSide />
          </div>

        </div>
      </main>
    </>
  )
}
