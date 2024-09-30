'use client'
import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu';
import { cn } from '@/src/utils/cn';
import Link from 'next/link';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-30', className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm text-black">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Song Writing</HoveredLink>
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
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
  );
};

export default Navbar;
