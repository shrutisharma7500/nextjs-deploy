'use client';
import React from 'react';
import Link from 'next/link';
import coursedata from '@/src/app/data/music_courses.json';
import Image from 'next/image';
import { BackgroundGradient } from './ui/background-gradient';

// Define the 'Instructor' and 'Course' interfaces
interface Instructor {
  name: string;
  qualification: string;
  experience: string;
}

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  isFeatured: boolean;
  instructor: Instructor;
  price: number;
  image: string;
}

const Featuredcourses = () => {
  // Filter featured courses
  const featuredCourses: Course[] = coursedata.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="bg-gray-900 w-full h-full py-12">
      <div className="text-center">
        <h2 className="text-teal-600 bg-gray-900 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 sm:text-4xl bg-gray-900 text-white">
          Learn with the best
        </p>
      </div>
      <div className="mt-10 bg-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center bg-gray-900">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="ml-4 flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`} className="text-teal-500 hover:text-teal-400 transition">
                    Learn more
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center bg-gray-900">
        <Link href="/courses" className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          View all courses
        </Link>
      </div>
    </div>
  );
};

export default Featuredcourses;
