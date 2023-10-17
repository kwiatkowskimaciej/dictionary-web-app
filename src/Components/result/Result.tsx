import { useSearchParams } from 'next/navigation';
import { ResultHeader } from './ResultHeader';
import { useEffect, useState } from 'react';

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
        setData(data[0]);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [word]);
  return (
    <div className="mt-6 md:mt-[50px] px-6 md:px-10">
      <ResultHeader word={data?.word} phonetic={data?.phonetic} />
    </div>
  );
}
