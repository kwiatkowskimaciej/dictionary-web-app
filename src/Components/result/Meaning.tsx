interface Props {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: [];
  antonyms?: [];
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
    <div className="mt-7">
      <div className="flex items-center gap-4 mb-8">
        <span className="italic font-bold text-lg">{partOfSpeech}</span>
        <div className="border-t w-full h-1px border-grey-medium"></div>
      </div>
      <div className="text-grey-dark">Meaning</div>
      <div>
        <ul className="list-disc marker:text-purple ml-4 text-[15px] text-black-3 mt-4 flex flex-col gap-3 dark:text-white">
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
      {synonyms?.length != 0 && (
        <div className="flex gap-6 mt-6 flex-wrap">
          <span className="text-grey-dark">Synonyms</span>
          {synonyms?.map((synonym, index) => {
            return (
              <span key={index} className="text-purple font-bold">
                {synonym}
              </span>
            );
          })}
        </div>
      )}
      {antonyms?.length != 0 && (
        <div className="flex gap-6 mt-6 flex-wrap">
          <span className="text-grey-dark">Antonyms</span>
          {antonyms?.map((antonym, index) => {
            return (
              <span key={index} className="text-purple font-bold">
                {antonym}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
