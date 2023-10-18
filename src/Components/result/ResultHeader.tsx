import { PlayButton } from './PlayButton';

interface Props {
  word: string;
  phonetic: string;
  audioSrc?: string;
}

export function ResultHeader({ word, phonetic, audioSrc }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl mb-2 font-bold md:text-[64px] md:mb-6">
          {word}
        </h1>
        <p className="text-lg text-purple md:text-2xl">{phonetic}</p>
      </div>
      <PlayButton src={audioSrc} />
    </div>
  );
}
