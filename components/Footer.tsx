"use client";

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';

const Footer = () => {
  const items = [
    { id: 1, name: 'About' },
    { id: 2, name: 'Why Us' },
    { id: 3, name: 'Platform' },
    { id: 4, name: 'Pricing' },
    { id: 5, name: 'Contacts' },
  ];

  const socials = [
    { id: 1, name: 'Linkedin' },
    { id: 2, name: 'Instagram' },
    { id: 3, name: 'Facebook' },
  ];

  const footerControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      footerControls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
  }, [inView, footerControls]);

  return (
    <motion.footer
      className='bg-[#0d0d0d] text-white font-jost'
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={footerControls}
    >
      <div className='flex my-16'>
        <motion.div className='flex justify-around mt-5 mx-auto'>
          {items.map((item) => (
            <motion.ul
              key={item.id}
              className='px-4 cursor-pointer text-gray-400'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            >
              {item.name}
            </motion.ul>
          ))}
        </motion.div>
        <motion.h1
          className='text-5xl px-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          hello@ramos.com
        </motion.h1>
      </div>

      <motion.ul className='border border-gray-300 w-[80%] mx-auto my-20'></motion.ul>

      <section className='flex justify-around'>
        <motion.div className='flex gap-20 justify-between'>
          <motion.address
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          >
            <motion.h1 className=' font-semibold text-xl'>Warrensville Heights</motion.h1>
            <motion.p className=' font-light text-lg text-gray-400'>
              14418 Vineyard Drive, NC <br />
              44128
            </motion.p>
          </motion.address>

          <motion.address
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          >
            <motion.h1 className=' font-semibold text-xl'>Saint Louis</motion.h1>
            <motion.p className=' font-light text-lg text-gray-400'>
              1366 Penn Street <br /> 63101
            </motion.p>
          </motion.address>
        </motion.div>

        <motion.div className='space-y-3 text-xl'>
          {socials.map((social) => (
            <motion.ul
              key={social.id}
              className=''
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            >
              {social.name}
            </motion.ul>
          ))}
        </motion.div>
      </section>

      <div className='flex justify-around px-32 mt-12'>
        <Image
          src='/assets/images/ramos_footer.png'
          alt='logo'
          width={450}
          height={450}
          className='object-contain rounded-xl shadow-xl'
        />

        <motion.div
          className='flex gap-8 mt-12 text-gray-400'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          <motion.h1>Privacy policy</motion.h1>
          <motion.h1>License agreement</motion.h1>
        </motion.div>

        <Image
          src='/assets/images/QR.png'
          alt='logo'
          width={80}
          height={80}
          className='object-contain rounded-2xl'
        />
      </div>
    </motion.footer>
  );
};

export default Footer;