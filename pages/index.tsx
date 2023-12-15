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
        <title>Andrew Duit - Full Stack Developer | Game Designer | Portfolio</title>
        <meta name='description' content='Dive into my world of coding and gaming! Explore my portfolio as a full-stack developer and game design enthusiast. It&apos;s the perfect blend of tech and creativity!' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keyword' content='react, unreal engine, ue5, full stack,  nextjs, vr, engineer, full stack, developer'/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
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
