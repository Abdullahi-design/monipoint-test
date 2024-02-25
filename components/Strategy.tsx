"use client"

import React, { useEffect } from 'react';
import Stats from './ui/Stats';
import WidgetControl from './ui/WidgetControl';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Strategy = () => {
  const controls = useAnimation();
  const textControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
      textControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
  }, [inView, controls, textControls]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const textTransition = { duration: 0.8, ease: 'easeInOut' };

  return (
    <motion.section
      className='bg-slate-50 rounded-3xl p-4 py-12 font-jost'
      initial={{ opacity: 0 }}
      animate={controls}
      ref={ref}
    >
      <div className='flex justify-between px-20'>
        <motion.h1
          className='text-4xl my-4'
          variants={textVariants}
          initial="hidden"
          animate={textControls}
        >
          Your key to strategic <br /> success through analysis
        </motion.h1>
        <motion.h2
          className='text-xl font-light'
          variants={textVariants}
          initial="hidden"
          animate={textControls}
        >
          Ready for exciting instantaneous. <br /> all-accessible insights in real time?
        </motion.h2>
      </div>

      <div className='flex justify-around mt-8 '>
        <Stats />
        <WidgetControl />
      </div>

      <div className='flex justify-center mt-16 gap-5'>
        <motion.p 
        className='mt-12'
        animate={textControls}
        initial="hidden"
        transition={{ ...textTransition, delay: 0.5 }}
        >up to</motion.p>
        <motion.h1 
        className='text-8xl' 
        variants={textVariants} 
        initial="hidden" 
        animate={textControls}
        transition={{ ...textTransition, delay: 0.6 }}
        >
          45%
        </motion.h1>
        <motion.article
          variants={textVariants}
          animate={textControls}
          initial="hidden"
          transition={{ ...textTransition, delay: 0.7 }}
          className="text-sm font-light"
        >
          Increase your analytics by up to 45%. Unique <br /> algorithm provides insights from data, reducing time for analysis <br /> and saving time for making important informed decisions
        </motion.article>
      </div>
    </motion.section>
  );
};

export default Strategy;