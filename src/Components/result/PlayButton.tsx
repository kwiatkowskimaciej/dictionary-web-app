import { Howl } from 'howler';

export function PlayButton() {
  const play = (src: string) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  return (
    <div
      className="w-12 h-12 md:w-[75px] md:h-[75px]"
      onClick={() =>
        play(
          'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3'
        )
      }
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
        <g fill="#A445ED" fillRule="evenodd">
          <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
          <path d="M29 27v21l21-10.5z" />
        </g>
      </svg>
    </div>
  );
}
