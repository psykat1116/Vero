import React from "react";
import Image from "next/image";

const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/EmptyFavorites.png"
        alt="EmptyFavorites"
        height={250}
        width={250}
      />
      <h2 className="text-2xl font-semibold mt-6">No Results Found!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try Favorating a Board
      </p>
    </div>
  );
};

export default EmptyFavorites;
