import React from 'react';
import StoryCard from './StoryCard.jsx'

const projects = [
    {
      name: 'Sachin Shelke',
      src: '',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione cum magnam temporibus corrupti asperiores provident, fugit molestias quos sunt, tempore sequi nihil iste fugiat consequatur cupiditate rem officiis harum a vitae praesentium ab!',
    },
    {
      name: 'Prati Shinde',
      src: 'https://images.unsplash.com/photo-1607992922515-7e38329e65d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione cum magnam temporibus corrupti asperiores provident, fugit molestias quos sunt, tempore sequi nihil iste fugiat consequatur cupiditate rem officiis harum a vitae praesentium ab!',
    },
    {
      name: 'Ranjeet Harishchandre',
      src: 'https://images.unsplash.com/photo-1618886487325-f665032b6352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione cum magnam temporibus corrupti asperiores provident, fugit molestias quos sunt, tempore sequi nihil iste fugiat consequatur cupiditate rem officiis harum a vitae praesentium ab!',
    },
    {
      name: 'Abhi Shinde',
      src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione cum magnam temporibus corrupti asperiores provident, fugit molestias quos sunt, tempore sequi nihil iste fugiat consequatur cupiditate rem officiis harum a vitae praesentium ab!',
    },
    {
      name: 'Sagar Borude',
      src: 'https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione cum magnam temporibus corrupti asperiores provident, fugit molestias quos sunt, tempore sequi nihil iste fugiat consequatur cupiditate rem officiis harum a vitae praesentium ab!',
    },
  ];


const Project = () => {
  return <div>
      <div className='flex flex-col justify-center mx-auto w-full px-32'>
            {projects.map((project) => (
                <StoryCard key={project.name} name={project.name} src={project.src} detail={project.detail}/>
            ))}
        </div>
  </div>;
};

export default Project;