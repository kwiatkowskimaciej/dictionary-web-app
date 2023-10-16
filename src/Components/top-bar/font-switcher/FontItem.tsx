import { useFontState } from '@/Providers/FontProvider';
import { twMerge } from 'tailwind-merge';

export function FontItem({ font }: { font: string }) {
  const { fontFamily, setFontFamily } = useFontState();
  return (
    <div
      className={twMerge(
        'h-6 mx-4 mt-4 capitalize',
        fontFamily === font ? 'font-bold' : 'font-normal'
      )}
      onClick={() => setFontFamily(font)}
    >
      {font} {font === 'sans' && ' serif'}
    </div>
  );
}
