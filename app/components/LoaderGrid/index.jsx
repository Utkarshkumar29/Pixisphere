import React from "react";
import PhotographerCardLoader from "../CategoryLoader"

const LoaderGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, idx) => (
        <PhotographerCardLoader key={idx} />
      ))}
    </div>
  );
};

export default LoaderGrid
