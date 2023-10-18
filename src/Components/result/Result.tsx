import { useSearchParams } from 'next/navigation';
import { ResultHeader } from './ResultHeader';
import { useEffect, useState } from 'react';
import { Meaning } from './Meaning';
import Link from 'next/link';

export function Result() {
  const searchParams = useSearchParams();
  const word = searchParams.get('word') || 'keyboard';
  let [data, setData] = useState<any | null>(null);

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [word]);
  return (
    <div className="mt-6 md:mt-[50px] px-6 md:px-10">
      {data ? (
        <>
          <ResultHeader
            word={data[0].word}
            phonetic={
              data[0].phonetics.find((phonetic: any) => phonetic.text).text
            }
            audioSrc={
              data[0].phonetics.find((phonetic: any) => phonetic.audio).audio
            }
          />
          {data.map((wordData: any, index: number) => {
            return (
              <Meaning
                key={index}
                partOfSpeech={wordData.meanings[0].partOfSpeech}
                definitions={wordData.meanings[0].definitions}
                synonyms={wordData.meanings[0].synonyms}
                antonyms={wordData.meanings[0].antonyms}
              />
            );
          })}
          <div className="bg-grey-medium w-full h-px mt-8 mb-6"></div>
          <div className="mb-16">
            <div className="underline text-grey-dark">Source</div>
            <Link
              href={data[0].sourceUrls[0]}
              className="text-black-3 flex items-center gap-2 underline dark:text-white"
            >
              {data[0].sourceUrls[0]}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path
                  fill="none"
                  stroke="#838383"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
                />
              </svg>
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
}
