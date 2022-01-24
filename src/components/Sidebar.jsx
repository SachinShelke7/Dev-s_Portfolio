import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex justify-center items-center flex-col py-2 md:hidden">
      {showSidebar ? (
        <p
          onClick={() => setShowSidebar(!showSidebar)}
          className="flex text-white items-center cursor-pointer fixed right-10 top-5 z-50 md:hidden"
        >
          Hide
        </p>
      ) : (
        <p
          onClick={() => setShowSidebar(!showSidebar)}
          className="flex text-white items-center cursor-pointer fixed right-10 top-5 z-30 md:hidden"
        >
          Menu
        </p>
      )}

      <div
        className={`top-0 right-0 w-full lg:w-[32vw] bg-[#1e1f24] p-10 pl-20 mt-10 text-white fixed h-full z-40 ease-in-out duration-500 ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-4xl font-semibold text-white">
          <div className="space-y-5 md:space-y-0 md:space-x-5 flex flex-col md:hidden w-full items-center justify-center">
            <Link to="/" className="">
              <p
                className="text-gray-300 hover:text-white hover:scale-105 border-white duration-300 transition-colors"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                Home
              </p>
            </Link>
            <Link to="/project">
              <p
                className="text-gray-300 hover:text-white hover:scale-105 border-white duration-300 transition-colors"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                Project
              </p>
            </Link>
            <Link to="/contact">
              <p
                className="text-gray-300 hover:text-white hover:scale-105 border-white duration-300 transition-colors"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                Contact Me
              </p>
            </Link>
            <div className="hover:bg-gray-200 px-2 rounded-lg">
              <a
                href="https://github.com/sachinshelke7"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <ion-icon
                  name="git-branch-outline"
                  className="header_logo"
                ></ion-icon>
              </a>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
}

export default Sidebar;
