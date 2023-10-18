import { useFontState } from '@/Providers/FontProvider';
import { twMerge } from 'tailwind-merge';

export function FontItem({ font }: { font: string }) {
  const { fontFamily, setFontFamily } = useFontState();
  return (
    <div
      className={twMerge(
        'h-6 mx-6 mt-4 capitalize text-sm md:text-lg hover:text-purple',
        fontFamily === font ? 'font-bold' : 'font-normal'
      )}
      onClick={() => setFontFamily(font)}
    >
      {font} {font === 'sans' && ' serif'}
    </div>
  );
}
