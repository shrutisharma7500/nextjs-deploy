'use client'
import Herosection from "../components/Herosection";

//  import { Navbar } from '@nextui-org/navbar';
 import Navbar from '../components/Navbar';
 import Featuredcourses from "../components/Featuredcourses";
import WhyChooseUS from "../components/WhyChooseUS";
import TestimonialCards from "../components/TestimonialCards";
import UpcomingWebinars from "../components/UpcomingWebinars";
import Instructors from "../components/Instructors";
import Courses from "../components/Courses";

const Page=()=> {
    return (
        
            <main className=' bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
 
              <Navbar/>
              <Herosection />
            {/* <Featuredcourses/> */}
           <WhyChooseUS/> 
            <TestimonialCards/>
            <UpcomingWebinars/>
              <Instructors/> 
            
           
          
            </main>
            
  
    );
}

export default Page;




