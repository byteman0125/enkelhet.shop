import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function SeriesPage({ params }: Props) {
  const { id } = params;

  if (id === 'abc') {
    notFound();
  }
  return (
    <div className="">
      <h1>SERIES page {id}</h1>
    </div>
  );
}
