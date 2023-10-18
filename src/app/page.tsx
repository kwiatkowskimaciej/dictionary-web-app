'use client';

import { Search } from '@/Components/Search';
import { Result } from '@/Components/result/Result';
import TopBar from '@/Components/top-bar/TopBar';
import { useFontState } from '@/Providers/FontProvider';
import { twMerge } from 'tailwind-merge';

export default function Home() {
  const { fontFamily } = useFontState();

  return (
    <div
      className={twMerge(
        fontFamily === 'sans'
          ? 'font-sans'
          : fontFamily === 'serif'
          ? 'font-serif'
          : 'font-mono tracking-tight',
        'max-w-4xl m-auto'
      )}
    >
      <TopBar />
      <Search />
      <Result />
    </div>
  );
}
