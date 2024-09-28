'use client';
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
    
        {
            title: "Guitar Basics",
            description: "Learn the fundamentals of playing guitar, including chords, strumming patterns, and basic music theory."
        },
        {
            title: "Piano Masterclass",
            description: "Join this advanced piano course to enhance your skills with techniques, classical pieces, and improvisation."
        },
        {
            title: "Singing Workshop",
            description: "Discover your voice's potential through vocal exercises, breath control, and performance techniques in this workshop."
        },
        {
            title: "Music Theory Essentials",
            description: "Explore the foundations of music theory, covering scales, intervals, harmony, and composition principles."
        },
        {
            title: "Drumming Techniques",
            description: "Develop your drumming skills with lessons on beats, fills, rhythmic patterns, and drum kit setup."
        },
        {
            title: "Violin for Beginners",
            description: "Start your journey in playing the violin with basic techniques, posture, and simple melodies."
        },
        {
            title: "Bass Guitar Mastery",
            description: "Master the bass guitar with lessons on basslines, techniques, and playing in different music styles."
        },
        {
            title: "Songwriting Fundamentals",
            description: "Learn the art of songwriting, from lyrics and melodies to song structures and storytelling."
        },
        {
            title: "Jazz Piano Improvisation",
            description: "Explore jazz piano improvisation techniques, chord voicings, and playing with a jazz feel."
        },
        {
            title: "Electronic Music Production",
            description: "Dive into electronic music production with software, synthesis, beat making, and sound design."
        }
    ]
    
const WhyChooseUS = () => {
  return (
    <div>
        <h2 className='text-center text-teal-400 text-3xl font-bold bg-gray-900'>WHY CHOOSE US</h2>
        <StickyScroll content={content}></StickyScroll>
    </div>
  )
}

export default WhyChooseUS;