import Link from 'next/link';

export function Homonym({
  title,
  homonyms,
}: {
  title: string;
  homonyms: string[];
}) {
  return (
    <div className="flex flex-wrap gap-6 mt-6 md:mt-10 md:text-xl md:gap-10">
      <span className="text-grey-dark">{title}</span>
      {homonyms.map((homonym, index) => (
        <Link
          href={`?word=${homonym}`}
          key={index}
          className="font-bold cursor-pointer text-purple hover:underline"
        >
          {homonym}
        </Link>
      ))}
    </div>
  );
}
