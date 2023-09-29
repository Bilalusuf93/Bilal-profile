import Tilt from 'react-parallax-tilt';
import Image from "next/image";
import { motion } from "framer-motion";

import { styles } from "@/styles/customStyles";
import { services } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-[275px]'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <Image
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As an adept software developer, I possess considerable proficiency in programming
        languages such as TypeScript and JavaScript, in addition to my expertise in employing
        frameworks like React, NextJS, Node.js, and Three.js. My aptitude for swiftly grasping
        new concepts, combined with my penchant for client engagement, enables me to craft
        efficacious, expandable, and user-centric resolutions to complex, real-world quandaries.
        I look forward to working collaboratively with you to actualize your visions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
