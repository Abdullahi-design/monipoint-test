"use client";

import Image from 'next/image';
import { AiOutlineLink } from 'react-icons/ai';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Info = () => {
  const containerControls = useAnimation();
  const headingControls = useAnimation();
  const imageControls = useAnimation();
  const iconControls = useAnimation();
  const buttonsControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await containerControls.start({ opacity: 1, transition: { duration: 1 } });
        await headingControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
        await imageControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
        await iconControls.start({ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } });
        await buttonsControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
      };

      sequence();
    }
  }, [inView, containerControls, headingControls, imageControls, iconControls, buttonsControls]);

  return (
    <section className='w-full font-jost my-24' ref={ref}>
      <div className='mx-12'>
        <motion.h1 className='text-8xl' initial={{ opacity: 0, y: 20 }} animate={headingControls}>
          We give you full
        </motion.h1>{' '}
        <br />
        <motion.h1
          className='text-8xl mt-3'
          initial={{ opacity: 0, y: 20 }}
          animate={headingControls}
        >
          <span className=' text-gray-400'>control</span> over your data
        </motion.h1>
      </div>

      <motion.div
        className='flex justify-around px-32'
        initial={{ opacity: 0, y: 20 }}
        animate={imageControls}
      >
        <Image
          src='/assets/images/info-1.png'
          alt='logo'
          width={300}
          height={300}
          className='object-contain rounded-xl shadow-xl'
        />

        <Image
          src='/assets/images/info-2.png'
          alt='logo'
          width={300}
          height={300}
          className='object-contain rounded-xl shadow-xl shadow-gray-500'
        />
      </motion.div>

      <div className='mx-auto text-center mt-52'>
        <motion.span
          className='bg-[#fe4a23] p-2 flex justify-center mx-auto w-fit text-white rounded-2xl'
          initial={{ opacity: 0, scale: 0 }}
          animate={iconControls}
        >
          <AiOutlineLink className='w-20 h-20' />
        </motion.span>
        <motion.h1
          className='text-9xl my-5'
          initial={{ opacity: 0, y: 20 }}
          animate={headingControls}
        >
          Get Started
        </motion.h1>
        <motion.p
          className=' font-light text-xl'
          initial={{ opacity: 0, y: 20 }}
          animate={headingControls}
        >
          Turn information into advantage! Start using <br /> Ramos today. Sign up for a free trial.
        </motion.p>

        <motion.div
          className='flex gap-2 justify-center my-8'
          initial={{ opacity: 0, y: 20 }}
          animate={buttonsControls}
        >
          <motion.button className='demo_btn'>Request a demo</motion.button>
          <motion.button className='start_btn'>Start for free</motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Info;
