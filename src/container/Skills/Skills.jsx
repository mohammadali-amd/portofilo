import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import { images } from '../../constants'
import './Skills.scss';

const skills = [
  { name: 'Figma', icon: images.figma, bgColor: '#f5f5f5' },
  { name: 'Flutter', icon: images.flutter, bgColor: 'rgb(198, 244, 255)' },
  { name: 'CSS', icon: images.css, bgColor: '#f5f5f5' },
  { name: 'Javascript', icon: images.javascript, bgColor: '#fbffc2' },
  { name: 'Redux', icon: images.redux, bgColor: '#f5f5f5' },
  { name: 'Node', icon: images.node, bgColor: '#b8fee8' },
  { name: 'Sass', icon: images.sass, bgColor: '#ffd1eb' },
  { name: 'Vue', icon: images.vue, bgColor: '#b8fee8' },
];

const experiences = [
  { year: '2020', works: [
    {name: 'Lorem, ipsum dolor sit amet consectetur adipisicing.', company: 'Lorem', desc: 'Quae dolorem cupiditate magnam tenetur nesciunt neque itaque non excepturi facilis id voluptatibus dignissimos, distinctio ad ea fugiat pariatur autem aut omnis!'},
  ]},

  { year: '2021', works: [
    {name: 'Lorem, ipsum dolor sit amet consectetur adipisicing.', company: 'Lorem', desc: 'Quae dolorem cupiditate magnam tenetur nesciunt neque itaque non excepturi facilis id voluptatibus dignissimos, distinctio ad ea fugiat pariatur autem aut omnis!'},
    {name: 'Lorem, ipsum dolor sit amet consectetur adipisicing.', company: 'Lorem', desc: 'Quae dolorem cupiditate magnam tenetur nesciunt neque itaque non excepturi facilis id voluptatibus dignissimos, distinctio ad ea fugiat pariatur autem aut omnis!'},
  ]},
  
  { year: '2022', works: [
    {name: 'Lorem, ipsum dolor sit amet consectetur adipisicing.', company: 'Lorem', desc: 'Quae dolorem cupiditate magnam tenetur nesciunt neque itaque non excepturi facilis id voluptatibus dignissimos, distinctio ad ea fugiat pariatur autem aut omnis!'},
    {name: 'Lorem, ipsum dolor sit amet consectetur adipisicing.', company: 'Lorem', desc: 'Quae dolorem cupiditate magnam tenetur nesciunt neque itaque non excepturi facilis id voluptatibus dignissimos, distinctio ad ea fugiat pariatur autem aut omnis!'},
  ]},
];

const Skills = () => {
  // const [experiences, setExperiences] = useState([]);
  // const [skills, setSkills] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';
  //   const skillsQuery = '*[_type == "skills"]';

  //   client.fetch(query).then((data) => {
  //     setExperiences(data);
  //   });

  //   client.fetch(skillsQuery).then((data) => {
  //     setSkills(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);