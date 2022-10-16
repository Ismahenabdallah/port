import React from 'react';
import { Typewriter } from "react-simple-typewriter"
// import woman image
import WomanImg from '../assets/img/IMG20220203123546.jpg';

const Animation = () => {
 
  return (
    <section
      id='home'
      className='lg:h-full  flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat  lg:py-0  overflow-hidden'
    >
      <div className='container mx-auto h-full mt-40'>
        <div className='flex items-center h-full '>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              salut , je suis  Ismahen! 👋
            </p>
           
            <h1 className=' leading-[44px] md:leading-tight lg:text-4xl  lg:leading-[1.2] font-bold md:tracking-[-2px]'>
            
              <Typewriter words={["  I Build & Design "," Web Interfaces.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </h1>
            
           
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end mb-16 '>
            <img className='h-[60vh]' src={WomanImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Animation;
