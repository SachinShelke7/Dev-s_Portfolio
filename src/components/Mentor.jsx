import React from "react";

function StoryCard({ name, src, link }) {
  return (
      <div className="w-[300px] cursor-pointer transition bg-gray-100 my-10 pb-6 rounded-lg shadow-xl hover:scale-105 transform duration-200">
        <img
          className="object-cover w-[400px] h-auto rounded-t-lg"
          src={src}
          layout="fill"
          alt="ImageP"
        />
        <div className="px-2">
          <p className="text-gray-900 text-xl font-bold font-serif py-5 text-center truncate">
            {name}
          </p>
          <div className="w-full flex justify-center">
          <a
            href={link}
            target="_blank"
            className="bg-gray-300 px-4 py-2 rounded-md hover:text-white cursor-pointer hover:bg-gray-900 transition-colors duration-500"
          >
            Live Link
          </a>
          </div>

        </div>
      </div>
  );
}

export default StoryCard;
