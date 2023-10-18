import { Homonym } from "./Homonym";

interface Props {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
}

interface Definition {
  definition: string;
  example?: string;
}

export function Meaning({
  partOfSpeech,
  definitions,
  synonyms,
  antonyms,
}: Props) {
  return (
    <div className="mt-8 md:mt-10">
      <div className="flex items-center gap-4 mb-8 md:mb-10">
        <span className="text-lg italic font-bold md:text-2xl">
          {partOfSpeech}
        </span>
        <div className="w-full border-t h-1px border-grey-medium"></div>
      </div>
      <div className="text-grey-dark md:text-xl">Meaning</div>
      <div>
        <ul className="list-disc marker:text-purple ml-4 text-[15px] text-black-3 mt-4 flex flex-col gap-4 dark:text-white md:text-lg">
          {definitions.map((definition, index) => {
            return (
              <li key={index}>
                {definition.definition}{' '}
                {definition.example && (
                  <div className="mt-4 text-grey-dark">
                    "{definition.example}"
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      {synonyms && synonyms.length > 0 && (
        <Homonym title="Synonyms" homonyms={synonyms} />
      )}
      {antonyms && antonyms.length > 0 && (
        <Homonym title="Antonyms" homonyms={antonyms} />
      )}
    </div>
  );
}
