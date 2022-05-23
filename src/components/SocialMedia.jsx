import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <p target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.90] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <BsTwitter />
            </motion.div>
          </p>
        </div>
        <div>
          <p target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.90] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <FaFacebookF />
            </motion.div>
          </p>
        </div>
        <div>
          <a href="https://www.instagram.com/webstudio.official/" target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.90] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <BsInstagram />
            </motion.div>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia