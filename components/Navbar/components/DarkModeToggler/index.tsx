'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { THEME_OPTIONS } from '@/constants';

import styles from './index.module.scss';

type DarkModeTogglerProps = {
  isDarkMode: boolean;
  onUpdateDarkModeState: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DarkModeToggler = ({
  isDarkMode,
  onUpdateDarkModeState,
}: DarkModeTogglerProps) => {
  return (
    <div className="dark_mode">
      <input
        className={styles.dark_mode_input}
        type="checkbox"
        id="darkmode-toggle"
        onChange={(e) => onUpdateDarkModeState(e)}
        checked={!!isDarkMode}
      />
      <label className={styles.dark_mode_label} htmlFor="darkmode-toggle">
        <FontAwesomeIcon icon={faSun} className={styles.sun} />
        <FontAwesomeIcon icon={faMoon} className={styles.moon} />
      </label>
    </div>
  );
};

export default DarkModeToggler;
