import Image from "next/image";

const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <Image
        src="/EmptyFavorites.png"
        alt="EmptyFavorites"
        height={300}
        width={300}
      />
      <h2 className="text-2xl font-semibold">No Results Found!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Click On The Star Icon To Add a Board To Your Favorites
      </p>
    </div>
  );
};

export default EmptyFavorites;
