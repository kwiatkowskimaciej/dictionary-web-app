import { PlayButton } from './PlayButton';

interface Props {
  word: string;
  phonetic: string;
}

export function ResultHeader({ word, phonetic }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl mb-1">{word}</h1>
        <p className="text-purple text-lg">{phonetic}</p>
      </div>
      <PlayButton />
    </div>
  );
}
