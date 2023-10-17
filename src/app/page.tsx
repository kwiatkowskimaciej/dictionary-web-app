'use client';

import { Search } from '@/Components/Search';
import { Result } from '@/Components/result/Result';
import TopBar from '@/Components/top-bar/TopBar';
import { useFontState } from '@/Providers/FontProvider';

export default function Home() {
  const { fontFamily } = useFontState();

  return (
    <div
      className={
        fontFamily === 'sans'
          ? 'font-sans'
          : fontFamily === 'serif'
          ? 'font-serif'
          : 'font-mono'
      }
    >
      <TopBar />
      <Search />
      <Result />
    </div>
  );
}
