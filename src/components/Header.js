import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'

// import components

import Nav from '../components/Nav';

import Socials from './Socials';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  const {i18n} = useTranslation()

  const onChangeLang = (e)=>{
    i18n.changeLanguage(e.target.value)
  }
  useEffect(()=>{
    for (let index = 0; index < document.getElementsByClassName('lang').length; index++) {
      const element = document.getElementsByClassName('lang')[index];
      if(element.value === i18n.language){
        element.setAttribute("selected", "true")
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full  flex items-center justify-evenly'>
      <h1 className=' hidden lg:block lg:text-2xl text-[10px] '>
       Ismahen Abdallah
          </h1>
       
        {/* nav */}
        <div className=' lg:block'>
          <Nav  />
        </div>
        {/* Socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
         {/* langage */}
        <div className="flex justify-center">
  {/*<div >
    <select onChange={onChangeLang} className="form-select 
      block
      w-full
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white   focus:border-accent focus:outline-none" aria-label="Default select example">
        <option value="en">EN</option>
        <option value="fr">FR</option>
      
     
    </select>
    </div>*/}
</div>
       
      </div>
    </header>
  );
};

export default Header;
