import Link from 'next/link';
import { FontSwitcher } from './font-switcher/FontSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function TopBar() {
  return (
    <header className="flex items-center justify-between p-6 md:pt-14 md:px-10">
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="38"
          viewBox="0 0 34 38"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#838383"
            strokeLinecap="round"
            strokeWidth="1.5"
          >
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>
      </Link>
      <div className="flex items-center gap-4 md:gap-6">
        <FontSwitcher />
        <div className="w-px h-8 bg-grey-medium"></div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
