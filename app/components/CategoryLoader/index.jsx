"use client";

import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

const PhotographerCardLoader = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <ContentLoader
        speed={2}
        width="100%"
        height={250}
        viewBox="0 0 400 250"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="10" ry="10" width="100%" height="190" />
        <rect x="0" y="200" rx="4" ry="4" width="60%" height="15" />
        <rect x="0" y="220" rx="3" ry="3" width="40%" height="12" />
        <rect x="0" y="240" rx="3" ry="3" width="50%" height="12" />
      </ContentLoader>
    </div>
  );
};

export default function LoaderWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return <PhotographerCardLoader />;
}
