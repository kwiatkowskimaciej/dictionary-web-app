'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleClass = 'transform translate-x-5';

  return (
    <div className="flex items-center gap-4 w-fit group">
      <button
        className="w-10 h-5 flex items-center rounded-full p-[3px] cursor-pointer bg-grey-dark group-hover:bg-purple dark:bg-purple"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <div
          className={twMerge(
            'bg-white h-3.5 w-3.5 rounded-full transform duration-300 ease-in-out',
            theme === 'dark' && toggleClass
          )}
        ></div>
      </button>
      <svg
        className="fill-current stroke-grey-dark group-hover:stroke-purple dark:stroke-purple"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </div>
  );
};
