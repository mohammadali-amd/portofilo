import React, {useState} from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';
import { images } from '../../constants';

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      
      <div>
        <a href='/#خانه'>
          <img src={images.logo_text} alt="logo-name" style={{ height:30, paddingTop: 10 }} />
        </a>
      </div>
      
      <ul className='app__navbar-links'>
        {['تماس با ما', 'مهارت ها', 'نمونه کار', 'درباره ما', 'خانه'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0]}}
            transition={{ duration: 0.85, ease: 'easeOut'}}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['خانه', 'درباره ما', 'نمونه کار', 'مهارت ها', 'تماس با ما'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

      <div className='app__navbar-logo'>
        <p>
          وب استودیو
        </p>
        <img src={images.logo} alt="logo" />
      </div>
      
    </nav>
  )
}

export default Navbar