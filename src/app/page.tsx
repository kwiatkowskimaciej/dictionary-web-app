'use client';

import TopBar from '@/Components/top-bar/TopBar';
import { useFontState } from '@/Providers/FontProvider';

export default function Home() {
  const { fontFamily } = useFontState();

  return (
    <div className={`font-${fontFamily}`}>
      <TopBar />
      Hello world!
    </div>
  );
}
