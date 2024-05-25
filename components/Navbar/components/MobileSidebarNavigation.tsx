'use client';

import { NAVIGATION_LINKS } from '@/constants';
import { NavigationDataItem } from '@/helpers';
import { AnimatePresence, motion } from 'framer-motion';

type MobileSidebarNavigationProps = {
  mobileNavbarSidebarRef: React.RefObject<HTMLDivElement>;
  menuData: NavigationDataItem[];
  activeNavLinkIdx: number;
  onClickNavbarItem: (navLinkIdx: number) => void;
};

const MobileSidebarNavigation = ({
  mobileNavbarSidebarRef,
  onClickNavbarItem,
  menuData,
  activeNavLinkIdx,
}: MobileSidebarNavigationProps) => {
  return (
    <motion.div
      className="fixed top-[70px] bottom-0 right-0 left-28 xs:left-32 sm:left-56 bg-gray-850 dark:bg-gray-1150 lg:hidden origin-right z-50"
      variants={{
        initial: {
          scaleX: 0,
        },
        animate: {
          scaleX: 1,
          transition: {
            duration: 0.3,
            // ease: [0.12, 0, 0.39, 0],
          },
        },
        exit: {
          scaleX: 0,
          transition: {
            duration: 0.3,
            // ease: [0.22, 1, 0.36, 1],
            // delay: 0.75, // To make sure the scroll smooth complete first before close the navbar
          },
        },
      }}
      initial="initial"
      exit="exit"
      animate="animate"
      ref={mobileNavbarSidebarRef}
    >
      <div className="p-6 w-full h-full">
        <ul className="flex flex-col items-start [&>*:not(:last-child)]:mb-8">
          {menuData.map((navLink, idx) => (
            <li
              key={`nav-link-${navLink.title}`}
              className={`
                list-none  cursor-pointer hover:font-semibold transition-all duration-100
                ${
                  idx === activeNavLinkIdx
                    ? 'text-body-p2-semibold text-orange-850 underline'
                    : 'text-body-p2-regular text-gray-150 hover:text-gray-50'
                }
              `}
              onClick={() => onClickNavbarItem(idx)}
            >
              {navLink.title}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default MobileSidebarNavigation;
