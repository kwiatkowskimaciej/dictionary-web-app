'use client';

import { Search } from '@/components/Search';
import { Result } from '@/components/result/Result';
import TopBar from '@/components/top-bar/TopBar';
import { useFontState } from '@/providers/FontProvider';
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
