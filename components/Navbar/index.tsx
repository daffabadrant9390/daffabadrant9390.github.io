'use client';

import React, { useState } from 'react';
import { NAVIGATION_LINKS } from '@/constants';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        className={`max-container padding-container flex flex-row items-center justify-between py-3 md:py-5 ${
          !!isMobileNavbarOpen ? 'shadow-md' : 'shadow-none'
        }`}
      >
        <div className="relative w-12 h-12 flex-shrink-0 lg:w-14 ld:h-14">
          <Image src="/assets/logo-light.png" alt="Logo Image" fill />
        </div>
        {/* Desktop Navbar List */}
        <ul className="hidden md:flex md:flex-row md:items-center gap-8">
          {NAVIGATION_LINKS.map((navLink) => (
            <li
              key={`nav-link-${navLink.title}`}
              className="list-none md:text-body-p2-regular lg:text-body-p1-regular text-gray-750 cursor-pointer hover:text-gray-800 hover:font-semibold transition-all duration-100"
            >
              {navLink.title}
            </li>
          ))}
        </ul>

        {/* Mobile Navbar Burger Menu */}
        {!!isMobileNavbarOpen ? (
          <button
            className="relative w-6 h-6 flex-shrink-0 md:hidden border-none"
            onClick={() => setIsMobileNavbarOpen(false)}
          >
            <Image alt="Close Menu Mobile" src="/assets/close-icon.svg" fill />
          </button>
        ) : (
          <button
            className="relative w-6 h-6 flex-shrink-0 md:hidden border-none"
            onClick={() => setIsMobileNavbarOpen(true)}
          >
            <Image
              alt="Hamburger Menu Mobile"
              src="/assets/hamburger-icon.svg"
              fill
            />
          </button>
        )}
      </div>
      {/* Mobile Navbar List Item */}
      {!!isMobileNavbarOpen && (
        <div className="fixed top-[72px] bottom-0 right-0 left-32 bg-gray-850 md:hidden">
          <div className="p-6 w-full h-full">
            <ul className="flex flex-col items-start gap-5">
              {NAVIGATION_LINKS.map((navLink) => (
                <li
                  key={`nav-link-${navLink.title}`}
                  className="list-none text-body-p2-regular text-gray-150 cursor-pointer hover:text-gray-50 hover:font-semibold transition-all duration-100"
                >
                  {navLink.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
