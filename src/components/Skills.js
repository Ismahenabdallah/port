/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


// import skill data
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-8 px-2'>
      <div className='container mx-auto'>
        <div
          className='grid grid-cols-8 space-x-2'
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='lg:h-20 mb-4 ' src={skill.image} alt='' />
              </div>
            );
          })}
      
        </div>
      </div>
    </section>
  );
};

export default Skills;
