import React from 'react';
import Projects from './Projects.jsx'
import Mentor from './Mentor.jsx'

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
const challenges = [
    {
      name: 'Huddle landing page with a single introductory section',
      src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/images/huddle.png?raw=true',
      link: 'https://jolly-golick-5ac346.netlify.app/'
    },
    {
      name: 'NFT preview card component',
      src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/images/card.png?raw=true',
      link: 'https://optimistic-hugle-868751.netlify.app/'
    },
    {
      name: 'Single price grid component',
      src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/images/grid2.png?raw=true',
      link: 'https://lucid-montalcini-a2bdcd.netlify.app/'
    },
    {
      name: 'Testimonials grid section',
      src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/images/grid.png?raw=true',
      link: 'https://happy-raman-7f10c6.netlify.app/'
    },
    {
      name: 'Four card feature section',
      src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/images/4card.png?raw=true',
      link: 'https://gifted-colden-c48807.netlify.app/'
    },
    {
      name: 'Clipboard landing page',
      src: 'https://github.com/SachinShelke7/Dev-s_Portfolio/blob/main/src/assets/images/landing.png?raw=true',
      link: 'https://hopeful-lovelace-27c5f4.netlify.app/'
    },
  ];


const Project = () => {
  return <div className='bg-gray-200'>
      <div className='flex flex-col justify-center mx-auto w-full px-12 md:px-32'>
            {projects.map((project) => (
                <Projects key={project.name} name={project.name} src={project.src} detail={project.detail} tech={project.tech} link={project.link}/>
            ))}
        </div>
        <div>
          <h1 className='text-center text-4xl font-bold py-20 text-[#1e1f24] -mb-10'>FrontEnd Mentor Challenges</h1>
        </div>
      <div className='flex flex-wrap justify-center md:justify-between w-full px-12 md:px-28'>
            {challenges.map((challenge) => (
                <Mentor key={challenge.name} name={challenge.name} src={challenge.src} link={challenge.link}/>
            ))}
        </div>

  </div>;
};

export default Project;