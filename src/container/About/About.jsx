import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants'
import './About.scss'

const abouts = [
  { title: 'آموزش و مشاوره رایگان', description: 'برای دریافت مشاوره رایگان در صفحات اجتماعی ما را دنبال کرده و با ما در ارتباط باشید و یا می توانید از راه های ارتباطی معرفی شده در سایت استفاده کنید. همچنین با دنبال کردن ما در شبکه های اجتماعی می توانید از آموزش ها استفاده کنید..', imgUrl: images.consulting},
  { title: 'سئو و تولید محتوا', description: 'تلاش ما در تیم وب استودیو، دیده شدن کسب و کار شما و در نتیجه بالارفتن بازدید و فروش شماست. شما می توانید تولید محتوای کسب و کار خود را با مدرن ترین شیوه های جذب مخاطب، به تیم ما بسپارید و بهترین نتایج را بگیرید.', imgUrl: images.seo},
  { title: 'خدمات دیجیتال مارکتینگ', description: 'شما می توانید با خیال راحت مدیریت پیج کاری خود را به ما بسپارید و در کمترین زمان ممکن، بهترین نتیجه را بگیرید و شاهد پیشرفت چشمگیر کسب و کار خود و فروش بیشتر محصولات و بالا رفتن درامد خود باشید.', imgUrl: images.digitalMarketing},
  { title: 'طراحی وبسایت', description: 'امروزه داشتن یک وبسایت برای هر کسب و کاری امری ضروریست. شما می توانید طراحی صفر تا صد انواع وبسایت نظیر فروشگاهی، خبری، معرفی محصولات، وبلاگ، شخصی و ... را با متدهای استاندارد و بروز دنیا به تیم ما بسپارید .', imgUrl: images.about02},

];

const About = () => {
  
  return (
    <>
      <h2 className='head-text'>ما در<span> وب استودیو</span>  چکار می کنیم؟ </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20}}> {about.title} </h2>
            <p className="p-text" style={{ marginTop: 10}}> {about.description} </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'درباره ما',
  'app__whitebg',
);