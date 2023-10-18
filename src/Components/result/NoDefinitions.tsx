interface Props {
  title: string;
  message: string;
  resolution: string;
}

export function NoDefinitions({ title, message, resolution }: Props) {
  return (
    <div className="flex flex-col items-center mt-32">
      <div className="text-[64px]">😕</div>
      <div className="text-lg font-bold capitalize md:text-xl">{title}</div>
      <div className="text-center md:text-lg text-grey-dark">
        {message} {resolution}
      </div>
    </div>
  );
}
