'use client'
import React from 'react'
import  { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/src/utils/cn";
import Link from "next/link"
export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return(
    <div className='{cn(" fixed top-10 inset-x-0 max-w-2xl mx-auto z-30", className)}'>
  <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home" >
          <div className="flex flex-col space-y-4 text-sm text-black">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="  flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">Basic music theory</HoveredLink>
            <HoveredLink href="/courses">Song writing</HoveredLink>
            <HoveredLink href="/courses">Advanced composition</HoveredLink>
            <HoveredLink href="/courses">Music production</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      
      
      </div>
  )

}
  