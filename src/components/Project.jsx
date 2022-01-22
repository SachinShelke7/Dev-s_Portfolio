import React from 'react';
import StoryCard from './StoryCard.jsx'

const projects = [
    {
      name: 'Facebook Clone',
      src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/images/fb.png?raw=true',
      tech: 'IN REACT.JS, NEXT.JS, TAILWIND CSS & FIREBASE, FIRESTORE',
      detail: 'I have build Facebook clone with ReactJS, NextJS, Tailwind CSS also Next-Auth for Facebook and Google authentication.It has all sharing functionality like facebook.',
      link: 'https://facebook-clone-psi-seven.vercel.app/'
    },
    {
      name: 'Amazon Clone',
      src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/images/amazon.png?raw=true',
      tech: 'IN REACT.JS, TAILWIND CSS, COMMERCE JS.',
      detail: 'I have build Amazon clone with ReactJS, Tailwind CSS and Commerce JS as a backend.',
      link: 'https://e-com-feature.vercel.app/'
    },
    {
      name: 'Google Clone',
      src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/images/google.png?raw=true',
      tech: 'IN REACT.JS, NEXT.JS, TAILWIND CSS & GOOGLE SEARCH API',
      detail: 'I have build Google Search clone with ReactJS, NextJS & Tailwind CSS also Google search APIs for Search functionality. It has all sharing functionality like .',
      link: 'https://google2-0-tan.vercel.app/'
    },
    {
      name: 'Hulu Clone',
      src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/images/hulu.png?raw=true',
      tech: 'IN REACT.JS, NEXT.JS & TAILWIND CSS, TMDB API.',
      detail: 'I have build HULU clone in JavaScript using ReactJS, NextJS, Tailwind CSS and live TMDB APIs.It has filter functionality according genres movie type etc. ',
      link: 'https://hulu2-0-rosy.vercel.app/'
    },
  ];


const Project = () => {
  return <div>
      <div className='flex flex-col justify-center mx-auto w-full px-32'>
            {projects.map((project) => (
                <StoryCard key={project.name} name={project.name} src={project.src} detail={project.detail} tech={project.tech} link={project.link}/>
            ))}
        </div>
  </div>;
};

export default Project;