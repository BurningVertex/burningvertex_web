import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Navbar.scss';


import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnClick = (e) => {
    e.stopPropagation();
    setToggle((prevState) => !prevState);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.navlogoblue} alt="navlogo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'services', 'clients', 'skills', 'testimonial', 'contact'].map((item) => ( //services and clients = about and work in db
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
       <HiMenuAlt4 onClick={(e) => handleOnClick(e)} />

        {toggle && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={(e) => handleOnClick(e)} />
            </motion.span>
            <ul>
              {['home', 'services', 'clients', 'skills', 'testimonial', 'contact'].map((item) => ( //services and clients = about and work in db
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

           {/* <ul>
            <span>Follow Us</span>
              <li>
              <BsLinkedin onClick={()=> window.open("https://www.linkedin.com/in/kjgreen86", "_blank")}/>
              <Icon icon="simple-icons:x" onClick={()=> window.open("https://www.x.com/burningvertex", "_blank")}/>
              <BsInstagram onClick={()=> window.open("https://www.instagram.com/burningvertex", "_blank")}/>
              </li>
        </ul>*/}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;