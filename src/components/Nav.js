import React from 'react';

// import navigation data
import { navigation } from '../data';
import { useTranslation } from 'react-i18next'
// import Link
import { Link } from 'react-scroll';

const Nav = () => {
  const {t} = useTranslation()

  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, index) => {
          return (
            <li
              className='text-white hover:text-accent cursor-pointer'
              key={index}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
              
                {t(`${item.name}`)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
