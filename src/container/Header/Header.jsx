import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div className='app__header app__flex'>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className='app__header-circles'
        >
          {[images.redux, images.reactjs, images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          ))}
        </motion.div>

        { <motion.div
          whileInView={{ opacity: [0,1] }}
          transition= {{ duration: 0.5, delayChildren: 0.5 }}
          className= 'app__header-img'
        >
          { <img src={images.person} alt="profile_bg" /> }
        </motion.div> 
        }
        
        <motion.div
          whileInView={{ x: [-100,0], opacity: [0,1] }}
          transition= {{ duration: 0.5 }}
          className= 'app__header-info'
        >
          <div className='app__header-badge'>
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className='p-text'>خوش آمدید به</p>
                <h1 className="head-text"> <span>وب استودیو</span> </h1>
                <p className='p-text'>
                   ما اینجا به شما کمک می کنیم تا کسب و کار خودتون رو دیجیتال کنید.
                   <br />
                   برای ارتباط با ما میتونید از شبکه های اجتماعی و راه های ارتباطی در بخش تماس ها استفاده کنید.
                   <br />
                   با ما از رقبایتان چندقدم جلوتر باشید...
                </p>
              </div>
            </div>
            <div className="tag-cmp app__flex">
              <p className='p-text'>♦ طراحی سایت ♦</p>
              <p className='p-text'>♦ سئو و بهینه سازی ♦</p>
              <p className='p-text'>♦ تولید محتوا ♦</p>
              <p className='p-text'>♦ دیجیتال مارکتینگ ♦</p>
              <p className='p-text'>♦ آموزش ♦</p>
            </div>
          </div>
        </motion.div>

    </div>
  )
}

export default AppWrap(Header , 'خانه');