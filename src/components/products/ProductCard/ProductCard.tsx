import Image from 'next/image';

export const ProductCard = () => {
  return (
    <div className="w-full h-fit product-card">
      <figure className="relative h-full w-full aspect-square">
        <Image
          src={`/example.jpg`}
          alt="item name"
          fill
          className="object-cover"
        />
      </figure>
      <div className="p-2 text-sm">
        <p>LOUNGE CHAIR</p>
        <div className="flex items-center justify-between">
          <p>1800€</p>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-red-600 rounded-full"></div>
            <div className="h-4 w-4 bg-green-600 rounded-full"></div>
            <div className="h-4 w-4 bg-yellow-600 rounded-full"></div>
            <div className="h-4 w-4 rounded-full flex items-center justify-center border border-black">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
