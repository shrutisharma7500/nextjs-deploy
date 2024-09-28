'use client'
import React from 'react'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import Image from "next/image";
import blog1 from '../app/assets/blog1.jpg'



const featuredWebinars= [
  {
    title: "Music Production Basics",
    description: "Explore the fundamentals of music production, from recording to mixing.",
    slug: "music-production-basics",
    isFeatured: true,
     imageURL: {blog1} // Image URL for Music Production Basics
  },
  {
    title: "Songwriting Workshop",
    description: "Join our workshop to enhance your songwriting skills and creativity.",
    slug: "songwriting-workshop",
    isFeatured: true,
    imageURL: "/images/songwriting_workshop.jpg" // Image URL for Songwriting Workshop
  },
  {
    title: "Songwriting Workshop",
    description: "Join our workshop to enhance your songwriting skills and creativity.",
    slug: "songwriting-workshop",
    isFeatured: true,
    imageURL: "/images/songwriting_workshop.jpg" // Image URL for Songwriting Workshop
  },
  // Add imageURL for each webinar as needed
];

function UpcomingWebinars() {  
  return (
    <div className='p-12 bg-gray-900 '>
      <div  className=' bg-gray-900 max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide bg-gray-900 uppercase'>FEATURED Blogs</h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl bg-gray-900'>
            Enhance the CXI journey
          </p>
        </div>
        <div className='mt-10 bg-gray-900 '>
          <HoverEffect 
            items={featuredWebinars.map(webinar=>(
              {
                title: webinar.title,
                description: webinar.description,
                link: `/webinar/${webinar.slug}`, // Use slug to create a unique link
                imageURL: webinar.imageURL,
                key: webinar.slug // Use a unique key
              }
            ))} />
        </div>
        <div className='mt-10 text-center bg-gray-900'>
          <Link href={"/"} className=' px-4 py-2 rounded border border-neutral-600 text-neutral-700 hover:bg-gray-100 transition duration-200 bg-gray-900'>
            View all 
          </Link>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default UpcomingWebinars;

