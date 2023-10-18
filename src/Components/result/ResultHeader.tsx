import { PlayButton } from './PlayButton';

interface Props {
  word: string;
  phonetic: string;
  audioSrc: string;
}

export function ResultHeader({ word, phonetic, audioSrc }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl mb-1 font-bold">{word}</h1>
        <p className="text-purple text-lg">{phonetic}</p>
      </div>
      <PlayButton src={audioSrc} />
    </div>
  );
}
