import React from "react";
import HomePNG from "../assets/illustrations/HomePNG.png";
import Softs from "./Softs";
import Technologies from "./Technologies";
import homeLogo from '../assets/illustrations/home.svg'

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
    src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/icons/vs.png?raw=true',
  },
  {
    name: 'Adobe Photoshop',
    src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/icons/ps.png?raw=true',
  },
];

const Home = () => {
  
  return (
    <div className="px-10 pt-28 bg-gray-200 text-[#1e1f24]">
      <div className="flex flex-col md:flex-row justify-between w-full items-center">
        <div className="md:w-1/2 box-content">
          <h1 className="text-6xl font-extrabold font-serif">SACHIN SHELKE</h1>
          <p className="">
            I have been learning Frontend Technologies for last 6 months.I have
            done graduation in B.B.A. As I'm learning frontend technologies have
            build 15+ projects in various web technologies including ReactJS,
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
          <img src={homeLogo} alt="" className="w-full flex items-center justify-center" />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold font-serif text-center py-14">What I Do ?</h1>
     <div className="flex justify-between items-center">
       <div className="w-full">
         <h1 className="text-4xl font-bold text-center">Frontend Web Development</h1>

         <div>
          <h1 className="text-3xl font-bold font-serif pt-20 text-center">Languages & Frameworks </h1>
        </div>
       <div className='flex flex-wrap w-full justify-center'>
            {technologies.map((technology) => (
                <Technologies key={technology.name} name={technology.name} src={technology.src} />
            ))}
        </div>
        <div>
          <h1 className="text-3xl font-bold font-serif text-center">Softwares </h1>
        </div>
       <div className='flex flex-wrap w-full justify-center'>
            {softs.map((soft) => (
                <Softs key={soft.name} name={soft.name} src={soft.src} />
            ))}
        </div>
        </div>
     </div>
      </div>
    </div>
  );
};

export default Home;
