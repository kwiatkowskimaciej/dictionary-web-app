import { Howl } from 'howler';
import { twMerge } from 'tailwind-merge';

interface Props {
  src?: string;
}

export function PlayButton({ src }: Props) {
  const play = (src: string) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  return (
    <button
      className="w-12 h-12 md:w-[75px] md:h-[75px] cursor-pointer"
      disabled={src == null}
      onClick={() => play(src!)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
        <g className="group" fillRule="evenodd">
          <circle
            className={twMerge(
              'fill-purple hover:opacity-100',
              src == null && 'fill-grey-medium hover:opacity-25'
            )}
            cx="37.5"
            cy="37.5"
            r="37.5"
            opacity=".25"
          />
          <path
            className={twMerge(
              'fill-purple group-hover:fill-white',
              src == null && 'fill-grey-light group-hover:fill-grey-light'
            )}
            d="M29 27v21l21-10.5z"
          />
        </g>
      </svg>
    </button>
  );
}
