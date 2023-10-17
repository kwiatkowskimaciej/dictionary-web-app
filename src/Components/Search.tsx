import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export function Search() {
  let [word, setWord] = useState('');
  let [error, setError] = useState('');
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleBlur();
    router.push(`?word=${word}`);
  }

  function handleBlur() {
    if (word === '') {
      setError("Whoops, can't be empty…");
    } else {
      setError('');
    }
  }

  return (
    <form className="px-6" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          className={twMerge(
            'h-12 md:h-16 w-full rounded-2xl bg-grey-light p-6 font-bold text-black-3 focus:outline-purple dark:bg-black-2 dark:text-white dark:placeholder:text-grey-dark',
            error ? 'outline outline-red focus:outline-2' : null
          )}
          name="word"
          id="word"
          type="text"
          value={word}
          placeholder="Search for any word..."
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setWord(e.currentTarget.value);
            setError('');
          }}
          onBlur={handleBlur}
        />
        <p className="text-red mt-2">{error ? error : null}</p>
        <button className="absolute right-6 top-4 md:top-6" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fill="none"
              stroke="#A445ED"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
