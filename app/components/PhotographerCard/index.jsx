"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSelectedPhotographer } from "../../redux/photographerSlice";

export default function PhotographerCard({ photographer }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedPhotographer(photographer));
    router.push(`pages/photographer/${photographer.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition w-full cursor-pointer"
    >
      <div className="w-full h-48 relative mb-2">
        {!isImageLoaded && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse rounded-md z-0" />
        )}
        <img
          src={photographer.profilePic}
          alt={photographer.name}
          className={`w-full h-full object-cover rounded-md transition-opacity duration-300 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <h3 className="text-lg font-semibold">{photographer.name}</h3>
      <p className="text-sm text-gray-600">{photographer.location}</p>
      <p className="text-sm">₹{photographer.price} | ⭐ {photographer.rating}</p>
      <p className="text-sm mt-1 text-gray-500">
        {photographer.styles.join(", ")}
      </p>
    </div>
  );
}
