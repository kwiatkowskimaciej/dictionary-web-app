import { FontItem } from './FontItem';

const fonts = ['sans', 'serif', 'mono'];

export function FontDropdown({ open }: { open: boolean }) {
  return (
    <div
      className="absolute pb-4 border rounded-lg border-grey-medium w-36 -right-2 h-fit top-8"
      hidden={open}
    >
      {fonts.map((font) => {
        return <FontItem key={font} font={font} />;
      })}
    </div>
  );
}
