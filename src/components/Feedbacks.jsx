import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles/customStyles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import Image from "next/image";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  imageLoader
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <Image
          src={image}
          alt={`feedback_by-${name}`}
          className='rounded-full object-cover'
          width={100}
          height={100}
          loader={imageLoader}
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const imageLoader = ({ src, width, quality }) => {
    return `https://randomuser.me/api/portraits/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} imageLoader={imageLoader}/>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
