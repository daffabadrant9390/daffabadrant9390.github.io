'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import './index.css';
import { THEME_OPTIONS } from '@/constants';

type DarkModeTogglerProps = {
  isDarkMode: boolean;
  onUpdateDarkModeState: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DarkModeToggler = ({
  isDarkMode,
  onUpdateDarkModeState,
}: DarkModeTogglerProps) => {
  const hello = THEME_OPTIONS.DARK;

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={(e) => onUpdateDarkModeState(e)}
        checked={!!isDarkMode}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <FontAwesomeIcon icon={faSun} className="sun w-5 h-5 lg:w-6 lg:h-6" />
        <FontAwesomeIcon icon={faMoon} className="moon w-5 h-5 lg:w-6 lg:h-6" />
      </label>
    </div>
  );
};

export default DarkModeToggler;
