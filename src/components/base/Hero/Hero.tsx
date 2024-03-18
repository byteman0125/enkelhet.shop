interface Props {
  title?: string;
  text: string;
}

export const Hero = ({ title, text }: Props) => {
  return (
    <div className="h-[324px] px-2 md:px-4 xl:px-6 justify-end mb-12 flex flex-col gap-4">
      {title && <h1 className="text-2xl font-bold">Serie {title}</h1>}
      <p className="max-w-[620px]">{text}</p>
    </div>
  );
};
