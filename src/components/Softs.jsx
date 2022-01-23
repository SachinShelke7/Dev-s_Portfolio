import React from 'react';

const Softs = ({ name, src }) => {
  return <div>
            <div className="w-[150px] cursor-pointer transition bg-white m-10 pb-6 rounded-lg shadow-xl hover:scale-105 transform duration-200">
          <div className="w-full flex justify-center items-center pt-2">
          <img
          className="object-cover h-[100px] rounded-t-lg"
          src={src}
          layout="fill"
          alt="Logos"
        />
          </div>
        <div className="px-2">
          <p className="text-gray-900 text-xl font-bold font-serif py-5 text-center truncate">
            {name}
          </p>
        </div>
      </div>
  </div>;
};

export default Softs;
