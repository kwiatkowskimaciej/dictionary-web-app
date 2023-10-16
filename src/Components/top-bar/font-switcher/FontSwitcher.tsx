'use client';

import { useFontState } from '@/Providers/FontProvider';
import { FontDropdown } from './FontDropdown';
import { useState } from 'react';

export function FontSwitcher() {
  const { fontFamily } = useFontState();
  let [open, setOpen] = useState(false);
  return (
    <div
      className="relative flex items-center gap-4"
      onClick={() => setOpen(!open)}
    >
      <span className="font-bold capitalize">
        {fontFamily}
        {fontFamily === 'sans' && ' Serif'}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="8"
        viewBox="0 0 14 8"
      >
        <path
          fill="none"
          stroke="#A445ED"
          stroke-width="1.5"
          d="m1 1 6 6 6-6"
        />
      </svg>
      <FontDropdown open={open} />
    </div>
  );
}