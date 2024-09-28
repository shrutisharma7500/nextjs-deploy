'use client';
import React from 'react'
import Link from "next/link"
// import { Spotlight } from './ui/Spotlight';
//   import Navbar from '../components/Navbar';
import { SparklesCore } from './ui/Sparkles';
import { Button } from "./ui/moving-border";

const Herosection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto  md:py-0'>
        <div className="w-[40rem] h-40 relative pt-10">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
        <div className='p-4 relative z-10 w-full text-center'>
            <h1 className='text-white mt-10 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>CXI-Join our community</h1>
            <p className=' mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim at corporis quidem quaerat sunt iure alias reprehenderit temporibus beatae, porro maiores ab tenetur sed! Laborum accusamus obcaecati minus cum.</p>
            <div className='mt-4 text-white'>
                <Link href={"/courses"} >
                <Button borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore blogs
      </Button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Herosection