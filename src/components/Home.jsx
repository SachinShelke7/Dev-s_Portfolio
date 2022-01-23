import React from "react";
import HomePNG from "../assets/illustrations/HomePNG.png";
import Technologies from "./Technologies";

const technologies = [
  {
    name: 'HTML',
    src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/icons/1.png?raw=true',
  },
  {
    name: 'CSS',
    src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/icons/2.png?raw=true',
  },
  {
    name: 'Tailwind CSS',
    src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/icons/3.png?raw=true',
  },
  {
    name: 'JAVASCRIPT',
    src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/icons/4.png?raw=true',
  },
  {
    name: 'React.JS',
    src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/icons/5.png?raw=true',
  },
  {
    name: 'Next.JS',
    src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/icons/6.png?raw=true',
  },
  {
    name: 'Firebase',
    src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/icons/7.png?raw=true',
  },
];
const softs = [
  {
    name: 'VSCODE',
    src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/icons/1.png?raw=true',
  },
  {
    name: 'Adobe Photoshop',
    src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/icons/2.png?raw=true',
  },
];

const Home = () => {
  
  return (
    <div className="px-10 pt-28 bg-gray-200 text-[#1e1f24]">
      <div className="flex justify-between w-full items-center">
        <div className="w-1/2 box-content">
          <h1 className="text-6xl font-extrabold font-serif">SACHIN SHELKE</h1>
          <p className="">
            I have been learning Frontend Technologies for last 6 months. Thave
            done graduation in B.B.A. As I'm learning frontend technologies have
            build 10+ projects in various web technologies including ReactJS,
            Next.JS, Tailwind CSS, CSS. I'm continuous learner and enthusiast to
            learn new technologies.
          </p>
          <div className="flex justify-center py-10 space-x-5">
          <ion-icon name="logo-github" size="large"></ion-icon>
          <ion-icon name="logo-linkedin" size="large"></ion-icon>
          <ion-icon name="logo-google" size="large"></ion-icon>
          </div>
        </div>
        <div>
          <img src={HomePNG} alt="" className="w-full" />
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold font-serif text-center pt-10">What I Do ?</h1>
     <div className="flex justify-between items-center">
       <div className="w-full">
         <h1 className="text-4xl font-bold text-center">Frontend Developer</h1>

       <div className='flex flex-wrap'>
            {technologies.map((technology) => (
                <Technologies key={technology.name} name={technology.name} src={technology.src} />
            ))}
        </div>
        </div>
     </div>
      </div>
    </div>
  );
};

export default Home;
