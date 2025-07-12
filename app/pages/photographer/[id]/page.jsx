"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import BackArrow from "../../../public/BackIcon"
import { useSelector } from "react-redux";

const PhotographerProfile = () => {
  const { id } = useParams();
  const router = useRouter();

  const data = useSelector((state) => state.photographer.selectedPhotographer);

  if (!data) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen px-6 md:px-16 py-10 bg-gray-50 text-gray-800">
      {/* Top Bar */}
      <button
        onClick={() => router.push("/")}
        className=" cursor-pointer flex items-center gap-2 mb-6 text-sm text-black hover:underline"
      >
        <BackArrow/> Back to Categories
      </button>

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-md rounded-xl p-6 mb-10">
        <img
          src={data.profilePic}
          alt={data.name}
          className="w-32 h-32 rounded-full object-cover shadow-md"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{data.name}</h1>
          <p className="text-sm mt-2">{data.bio}</p>
          <div className="flex gap-3 mt-4 text-sm text-gray-500">
            <span>📍 {data.location}</span>
            <span>⭐ {data.rating}</span>
            <span>₹ {data.price}</span>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {data.portfolio.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="portfolio"
              className="w-full h-48 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {data.reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
            >
              <p className="text-sm italic">“{review.comment}”</p>
              <div className="text-xs text-gray-500 mt-1">
                - {review.name}, {review.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Info */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Pricing</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm flex-1 text-center">
            <p className="font-semibold">Wedding Package</p>
            <p className="text-sm mt-1">₹25000 - Full-day + Album</p>
          </div>
          <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm flex-1 text-center">
            <p className="font-semibold">Portrait Session</p>
            <p className="text-sm mt-1">₹2000 - 2hr + 20 edited photos</p>
          </div>
          <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm flex-1 text-center">
            <p className="font-semibold">Landscape Prints</p>
            <p className="text-sm mt-1">From ₹500 - various sizes</p>
          </div>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Send an Inquiry</h2>
        <form className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md border border-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md border border-gray-300"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 rounded-md border border-gray-300 md:col-span-2"
          ></textarea>
          <button
            type="submit"
            className=" cursor-pointer bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 md:col-span-2 w-fit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhotographerProfile;
