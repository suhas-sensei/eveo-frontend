import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from '../components/Hero';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gameplay Shiller</title>
        <meta content="Your personal gameplay shiller" name="description" />
        <link href="/favicon.ico" rel="icon" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Gameplay Shiller" />
        <meta property="og:description" content="Your personal gameplay shiller" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eveo-frontend.vercel.app/" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Gameplay Shiller" />
        <meta name="twitter:description" content="Your personal gameplay shiller" />
      </Head>

      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
};

export default Home;