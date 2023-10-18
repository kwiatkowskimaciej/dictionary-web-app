import { FontItem } from './FontItem';

const fonts = ['sans', 'serif', 'mono'];

export function FontDropdown({ open }: { open: boolean }) {
  return (
    <div
      className="absolute z-10 pb-4 bg-white rounded-lg shadow-[0_5px_30px_0_rgba(0,0,0,0.10)] w-44 -right-2 h-fit top-8 cursor-pointer dark:bg-black-1 dark:shadow-purple"
      hidden={!open}
    >
      {fonts.map((font) => {
        return <FontItem key={font} font={font} />;
      })}
    </div>
  );
}
