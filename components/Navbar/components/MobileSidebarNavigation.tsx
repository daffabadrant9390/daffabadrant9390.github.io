'use client';

import { NAVIGATION_LINKS } from '@/constants';
import { AnimatePresence, motion } from 'framer-motion';

type MobileSidebarNavigationProps = {
  mobileNavbarSidebarRef: React.RefObject<HTMLDivElement>;
  onClickNavbarItem: () => void;
};

const MobileSidebarNavigation = ({
  mobileNavbarSidebarRef,
  onClickNavbarItem,
}: MobileSidebarNavigationProps) => {
  console.log('Should show this');
  return (
    <motion.div
      className="fixed top-[72px] bottom-0 right-0 left-28 xs:left-32 sm:left-56 bg-gray-850 lg:hidden origin-right z-50"
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
          },
        },
      }}
      initial="initial"
      exit="exit"
      animate="animate"
      ref={mobileNavbarSidebarRef}
    >
      <div className="p-6 w-full h-full">
        <ul className="flex flex-col items-start [&>*:not(:last-child)]:mb-5">
          {NAVIGATION_LINKS.map((navLink) => (
            <li
              key={`nav-link-${navLink.title}`}
              className="list-none text-body-p2-regular text-gray-150 cursor-pointer hover:text-gray-50 hover:font-semibold transition-all duration-100"
              onClick={onClickNavbarItem}
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
