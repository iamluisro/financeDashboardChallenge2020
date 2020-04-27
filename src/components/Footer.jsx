import React from 'react';
import {
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaHome,
} from 'react-icons/fa';
import '../assets/styles/Footer.scss';

const Footer = () => {

  const social = [
    {
      id: 0,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/iamluisro/',
      icon: FaLinkedin,
    },
    {
      id: 1,
      name: 'Github',
      link: 'https://www.github.com/iamluisro/',
      icon: FaGithubSquare,
    },
    {
      id: 2,
      name: 'Twitter',
      link: 'https://twitter.com/luis_rodriguez/',
      icon: FaTwitterSquare,
    },
    {
      id: 3,
      name: 'Home',
      link: 'https://luisro.co/',
      icon: FaHome,
    },
  ];

  return (
    <div className='Footer__container'>
      <address data-testid='companyAddress'>
        GBM
        <br />
        DISTRITO FEDERAL INSURGENTES (Matriz)
        <br />
        Av. Insurgentes Sur No. 1605, Piso 31
        <br />
        Col. San José Insurgentes C.P. 03900. México D.F.
        <br />
        Tel: 01 (55) 5480-5800
        <br />
        Fax: 01 (55) 5480-6645
      </address>
      <div data-testid='LuisContact'>
        <p>Created by Luis Rodriguez</p>
        <p>April 20-27, 2020</p>
        <div>
          { social.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`follow me on ${item.name}`}
                className='Footer__socialIcons'
              >
                <Icon size='1.5em' />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
