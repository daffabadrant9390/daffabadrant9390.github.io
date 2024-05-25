'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import MobileSidebarNavigation from './components/MobileSidebarNavigation';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { NavigationDataItem } from '@/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBarsStaggered,
  faCircleXmark,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import DarkModeToggler from './components/DarkModeToggler';

type NavbarProps = {
  menuData: NavigationDataItem[];
  isDarkMode: boolean;
  onUpdateDarkModeState: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Navbar = ({
  menuData,
  isDarkMode,
  onUpdateDarkModeState,
}: NavbarProps) => {
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

      if (
        !!targetNode &&
        !mobileNavbarSidebarRef.current?.contains(targetNode)
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
      } sticky top-0 bg-white dark:bg-gray-1150 z-40`}
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
          }}
        >
          {!!isDarkMode ? (
            <Image src="/assets/logo-dark.png" alt="Logo Image Light" fill />
          ) : (
            <Image src="/assets/logo-light.png" alt="Logo Image Light" fill />
          )}
        </div>
        {/* Desktop Navbar List */}
        <ul className="hidden lg:flex lg:flex-row lg:items-center [&>*:not(:last-child)]:mr-8">
          {menuData.map((navLink, idx) => (
            <li
              key={`nav-link-${navLink.title}`}
              className={`
                list-none cursor-pointer transition-all duration-200
                ${
                  idx === activeNavLinkIdx
                    ? 'text-orange-850 underline md:text-body-p2-semibold lg:text-body-p1-semibold'
                    : 'text-gray-750 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white md:text-body-p2-regular lg:text-body-p1-regular'
                }
              `}
              onClick={() => handleClickNavLink(idx)}
            >
              {navLink.title}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex flex-row items-center justify-center">
          <DarkModeToggler
            isDarkMode={isDarkMode}
            onUpdateDarkModeState={onUpdateDarkModeState}
          />
        </div>

        <div className="flex flex-row items-center gap-5 sm:gap-8 lg:hidden">
          <DarkModeToggler
            isDarkMode={isDarkMode}
            onUpdateDarkModeState={onUpdateDarkModeState}
          />

          {/* Mobile Navbar Burger Menu */}
          {/* TODO: Currently one of the icon should be wrapped with div. Need to find propper solution */}
          {!isMobileNavbarOpen ? (
            <div className="relative w-6 h-6 flex-shrink-0">
              <FontAwesomeIcon
                icon={faBarsStaggered}
                color={!!isDarkMode ? 'white' : 'black'}
                className="w-6 h-6 lg:hidden"
                id="close-btn-mobile"
                onClick={() => {
                  setIsMobileNavbarOpen(true);
                }}
              />
            </div>
          ) : (
            <FontAwesomeIcon
              icon={faCircleXmark}
              color={!!isDarkMode ? 'white' : 'black'}
              className="w-6 h-6 lg:hidden"
              onClick={() => {
                setIsMobileNavbarOpen(false);
              }}
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
