'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const testimonialCards =[
  
    {
      quote: "Studying piano at Music Academy has been a transformative journey for me. The dedicated instructors, personalized approach to learning, and state-of-the-art facilities have all contributed to my growth as a musician.  ",
      name: "John Doe",
      title: "Piano Student"
    },
    {
      quote: "As a voice student at Music Academy, I've experienced immense growth in my vocal abilities and musical understanding. The comprehensive curriculum, supportive faculty, and opportunities to perform have been invaluable.",
      name: "Emily Smith",
      title: "Voice Student"
    },
    {
      quote: "Learning guitar at Music Academy has been a fulfilling journey filled with guidance, challenges, and rewards. The instructors' expertise and personalized approach have helped me progress significantly in my guitar playing skills. ",
      name: "Michael Johnson",
      title: "Guitar Student"
    },
    {
      quote: "Being a violin student at Music Academy has been an enriching experience. The attention to detail, encouragement from instructors, and opportunities to perform have all contributed to my development as a violinist. .",
      name: "Sophia Brown",
      title: "Violin Student"
    },
    {
      quote: "Studying drums at Music Academy has been a dynamic and inspiring journey. The instructors' passion for percussion, coupled with their personalized guidance, has accelerated my drumming skills. ",
      name: "David Lee",
      title: "Drum Student"
    },
    {
      quote: "Enrolling in the music production program at Music Academy was a game-changer for me. The hands-on experience, industry insights, and mentorship from experienced producers have been invaluable. ",
      name: "Sarah Adams",
      title: "Music Production Student"
    },
    {
      quote: "Studying advanced piano at Music Academy has been an incredibly rewarding experience. The challenging repertoire, guidance from world-class experienced producers have been invaluable",
      name: "Sarah Adams",
      title: "Music Production Student"
    }
  
]
function TestimonialCards(){
  return(
    <div className='h-[40rem] w-full :bg-black dark:bg-grid-white/[0.2] relative flex flex-col text-center justify-center overflow-hidden '>
      <h1 className='text-2xl font-bold text-center text-teal-600 mb-4 '>TESTIMONIALS</h1>
    <h2 className='text-3xl font-bold text-center mb-8 z-10 '>Hear our Harmony: Voices of success</h2>
    <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
    <div className='w-full max-w-6xl'>
    <InfiniteMovingCards
        items={ testimonialCards}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
    </div>
  )

}


export default TestimonialCards