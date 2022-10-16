import React from 'react';



const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
        
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3  '>
               Ismahen Abdallah
    
              </h2>
              <p className='mb-4 text-accent'>
                Full-stack  JS Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              Développeur Web avec  de 2 ans d'expérience
                <br />
                Je suis perfectionniste, créatif, et j'aime bien apporter de la valeur ajoutée, contribuer à l'amélioration de l'existant.
                <br />
                       Bienvenue dans mon profil 
              </p>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
