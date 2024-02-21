'use client';

import React, { useEffect, useRef, useState } from 'react';
import { NAVIGATION_LINKS } from '@/constants';
import Image from 'next/image';
import MobileSidebarNavigation from './components/MobileSidebarNavigation';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { NavigationDataItem } from '@/helpers';

type NavbarProps = {
  menuData: NavigationDataItem[];
};

const Navbar = ({ menuData }: NavbarProps) => {
  const router = useRouter();
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const [activeNavLinkIdx, setActiveNavLinkIdx] = useState(0);

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          setIsPageScrolled(true);
        } else {
          setIsPageScrolled(false);
        }
      });
    }
  }, []);

  useEffect(() => {
    const scrollables = menuData.map(
      (menuDataItemObj) => menuDataItemObj?.sectionRef?.current
    );
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    const updateActiveNavLinkObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          handleScrollAndUpdateActiveNavLinkIdx(entry);
        });
      },
      {
        rootMargin: `-72px 0px -${screenHeight - 72}px 0px`,
        threshold: 0,
      }
    );

    for (const scrollable of scrollables) {
      if (!!scrollable) updateActiveNavLinkObserver.observe(scrollable);
    }
  }, [menuData]);

  const handleClickNavLink = (navLinkIdx: number) => {
    const navLinkSectionElement = menuData?.[navLinkIdx]?.sectionRef?.current;

    if (!navLinkSectionElement) return;

    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: navLinkSectionElement?.offsetTop - 70,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollAndUpdateActiveNavLinkIdx = (
    entry: IntersectionObserverEntry
  ) => {
    const { target, isIntersecting } = entry;

    if (!!isIntersecting) {
      menuData.forEach((menuDataItemObj, idx) => {
        if (menuDataItemObj?.sectionRef?.current === target) {
          setActiveNavLinkIdx(idx);
        }
      });
    }
  };

  return (
    <div
      className={`w-full ${
        !!isMobileNavbarOpen || !!isPageScrolled ? 'shadow-lg' : 'shadow-none'
      } sticky top-0 bg-white z-40`}
    >
      <div
        className={`max-container padding-container flex flex-row items-center justify-between py-3 lg:py-5`}
      >
        <div
          className="relative w-12 h-12 flex-shrink-0 lg:w-14 ld:h-14 cursor-pointer"
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.location.reload();
            }

            // router.refresh();
          }}
        >
          <Image src="/assets/logo-light.png" alt="Logo Image" fill />
        </div>
        {/* Desktop Navbar List */}
        <ul className="hidden lg:flex lg:flex-row lg:items-center [&>*:not(:last-child)]:mr-8">
          {menuData.map((navLink, idx) => (
            <li
              key={`nav-link-${navLink.title}`}
              className={`
                list-none   cursor-pointer hover:font-semibold transition-all duration-100
                ${
                  idx === activeNavLinkIdx
                    ? 'text-orange-850 underline md:text-body-p2-semibold lg:text-body-p1-semibold'
                    : 'text-gray-750 hover:text-gray-800 md:text-body-p2-regular lg:text-body-p1-regular'
                }
              `}
              onClick={() => handleClickNavLink(idx)}
            >
              {navLink.title}
            </li>
          ))}
        </ul>

        {/* //TODO: Dark Mode System: Desktop */}
        <div className="hidden lg:flex flex-row items-center justify-center">
          <h1 className="text-gray-850 font-bold text-xl lg:text-2xl">
            Dark Mode Desktop
          </h1>
        </div>

        {/* //TODO: Mobile Dark Mode & Hamburger Menu */}
        <div className="flex flex-row items-center gap-3 sm:gap-5 lg:hidden">
          <h1 className="text-gray-850 font-bold text-lg">Dark Mode Mobile</h1>
          {/* Mobile Navbar Burger Menu */}
          {!!isMobileNavbarOpen ? (
            <Image
              className="flex flex-row items-center justify-center lg:hidden"
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
              className="flex flex-row items-center justify-center lg:hidden"
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
            menuData={menuData}
            onClickNavbarItem={(navLinkIdx: number) => {
              handleClickNavLink(navLinkIdx);
              setIsMobileNavbarOpen(false);
            }}
            activeNavLinkIdx={activeNavLinkIdx}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
