'use client';

import React, { useEffect, useRef, useState } from 'react';
import { NAVIGATION_LINKS } from '@/constants';
import Image from 'next/image';
import MobileSidebarNavigation from './components/MobileSidebarNavigation';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const mobileNavbarSidebarRef = useRef<HTMLDivElement>(null);
  const closeButtonSidebarRef = useRef<HTMLImageElement>(null);

  /**
   * [INFO]: Handling Close Sidebar when user click outside sidebar area
   * = Set the ref to Sidebar area
   * - If user click on other area except the sidebar, it will automatically closed
   * - If user click anything inside the sidebar area, the sidebar still showing and
   * not automatically closed
   *
   * [NOTE]: If user click on close button with id close-btn-mobile, dont close the
   * sidebar from handler. Instead, use the onClick function inside the close button
   */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const targetNode = e.target as Node;
      const closeBtnEl = document.getElementById('close-btn-mobile');
      const isNotCloseBtn = targetNode !== closeBtnEl;

      if (
        !!targetNode &&
        !mobileNavbarSidebarRef.current?.contains(targetNode) &&
        !!isNotCloseBtn
      ) {
        setIsMobileNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [mobileNavbarSidebarRef]);

  return (
    <div
      className={`w-full ${!!isMobileNavbarOpen ? 'shadow-md' : 'shadow-none'}`}
    >
      <div
        className={`max-container padding-container flex flex-row items-center justify-between py-3 md:py-5`}
      >
        <div className="relative w-12 h-12 flex-shrink-0 lg:w-14 ld:h-14">
          <Image src="/assets/logo-light.png" alt="Logo Image" fill />
        </div>
        {/* Desktop Navbar List */}
        <ul className="hidden md:flex md:flex-row md:items-center gap-8">
          {NAVIGATION_LINKS.map((navLink) => (
            //TODO: Add mechanism to smooth scroll to each section
            <li
              key={`nav-link-${navLink.title}`}
              className="list-none md:text-body-p2-regular lg:text-body-p1-regular text-gray-750 cursor-pointer hover:text-gray-800 hover:font-semibold transition-all duration-100"
            >
              {navLink.title}
            </li>
          ))}
        </ul>

        {/* //TODO: Dark Mode System: Desktop */}
        <div className="hidden md:flex flex-row items-center justify-center">
          <h1 className="text-gray-850 font-bold text-xl lg:text-2xl">
            Dark Mode Desktop
          </h1>
        </div>

        {/* //TODO: Mobile Dark Mode & Hamburger Menu */}
        <div className="flex flex-row items-center gap-3 sm:gap-5 md:hidden">
          <h1 className="text-gray-850 font-bold text-lg">Dark Mode Mobile</h1>
          {/* Mobile Navbar Burger Menu */}
          {!!isMobileNavbarOpen ? (
            <Image
              className="flex flex-row items-center justify-center md:hidden"
              id="close-btn-mobile"
              ref={closeButtonSidebarRef}
              alt="Close Menu Mobile"
              src="/assets/close-icon.svg"
              width={24}
              height={24}
              onClick={(e) => {
                console.log('You Click Close Button');
                setIsMobileNavbarOpen(false);
              }}
            />
          ) : (
            <Image
              className="flex flex-row items-center justify-center md:hidden"
              alt="Hamburger Menu Mobile"
              src="/assets/hamburger-icon.svg"
              width={24}
              height={24}
              onClick={() => setIsMobileNavbarOpen(true)}
            />
          )}
        </div>
      </div>
      {/* Mobile Navbar List Item */}
      <AnimatePresence>
        {!!isMobileNavbarOpen && (
          <MobileSidebarNavigation
            mobileNavbarSidebarRef={mobileNavbarSidebarRef}
            onClickNavbarItem={() => {
              //TODO: Add mechanism to smooth scroll to each section
              setIsMobileNavbarOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
