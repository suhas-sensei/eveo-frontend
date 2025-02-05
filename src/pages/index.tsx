import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from '../components/Hero';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>EVEO: Onchain marketing</title>
        <meta content="Your personal AI streaming agent" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
};

export default Home;