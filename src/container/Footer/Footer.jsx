import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {

  const form = useRef();

  // sudygfuweyfb@outlook.com
  // fubvi@#bfe88
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wq07u8r', 'template_g4g5tz6', form.current, 'HgOz4E_BvnmldEUSk')
      .then((result) => {
          console.log(result.text);
          alert("Succesfull");
      }, (error) => {
          console.log(error.text);
          alert("Error");
      });
      e.target.reset();
  };

  return (
    <React.Fragment>
      <h2 className="head-text">
        راه های ارتباط با ما!
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">example@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
        </div>
      </div>
      
      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="نام" name="user_name" required />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="آدرس ایمیل" name="user_email" required />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="پیام شما"
              name="message"
              required
            />
          </div>
          
          <button className="p-text">
            ارسال
            <input type="submit" value="Send" style={{ display:'none' }} />
          </button>
        </div>
      </form>
      
    </React.Fragment>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'تماس با ما',
  'app__whitebg',
);