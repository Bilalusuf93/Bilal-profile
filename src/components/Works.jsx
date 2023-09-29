'use cleint';
import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles/customStyles";
import { github , WebLogo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import dynamic from 'next/dynamic';

const ScrollCarousel = dynamic(() => import('@/components/ScrollCarouselComponent'), { ssr: false });
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  roleFeatures,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[560px] w-full h-[600px] overflow-y-auto'
      >
        <ScrollCarousel image={image} github={github} website={''} WebLogo={WebLogo} githubUrl={source_code_link} />
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className="mt-4">
          <h3 className='text-white font-bold text-[18px]'>{`Role & Features`}</h3>
          <ul className="mt-2 text-secondary text-[14px]">
            {roleFeatures?.map((role, i) =>
              <li key={i}>- {role}</li>
            )}
          </ul>

        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, i) => (
            <a
              href={tag.url}
              key={`${name}-${tag.name}-i`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </a>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
