import React from 'react';

const Project = ({ item }) => {
  return (
    <a href={`${item.link}`} key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <div className='text-base max-w-md'>
        #{item.language}
        {item.name==="smartdelivery" ?<h1 className='text-gray-300'>#Project_Fin_D'etude</h1> : null}
      </div>
    </a>
  );
};

export default Project;
