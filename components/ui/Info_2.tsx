"use client"

import CountUp from 'react-countup';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { GiChaingun } from 'react-icons/gi';
import { MdOutlineInsights } from 'react-icons/md';
import { motion, useAnimation } from 'framer-motion';

const Info_2 = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setShouldAnimate(true);
    }
  }, [inView]);

  const controls = useAnimation();

  useEffect(() => {
    if (shouldAnimate) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [shouldAnimate, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      exit={{ opacity: 0 }} 
      className='bg-[#f9f9f9] px-20 p-4 font-jost rounded-2xl my-12 shadow shadow-gray-700'>
        <div className='gap-4 mt-4'>

          <div className='bg-white text-center w-[80%] px-2 mx-12 py-5 p-7 rounded-2xl border border-gray-100 shadow-xl'></div>
          <motion.div 
          className='bg-white -mt-6 p-1 w-[90%] mx-8 px-3 pb-5 text-center flex gap-2 rounded-2xl border border-gray-100 shadow-xl'
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          >
            <p className="bg-white p-2 w-fit h-fit rounded-xl border">
              <GiChaingun className="w-2 h-2 text-black bg-gray-200 rounded-full" />
            </p>
            <h1 className='text-sm mt-1'>Finance reports</h1>
          </motion.div>

          <motion.div 
          className='bg-white -mt-4 p-1 px-3 pb-5 w-[95%] mx-6 text-center gap-2 rounded-2xl border border-gray-100 shadow-xl'
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          >
            <div className='flex gap-2'>
                <p className="bg-white p-2 w-fit h-fit rounded-xl border">
                <MdOutlineInsights className="w-2 h-2 text-black bg-gray-200 rounded-full" />
                </p>
                <h1 className='text-sm mt-1'>Insights</h1>
            </div>

            <section className='flex justify-between'>
                <div className='text-left mt-12'>
                    <h1 className=' text-gray-400'>Total profit</h1>
                    {shouldAnimate && <CountUp start={0} end={246.2} duration={2} prefix='$' className="text-black text-xl my-3 text-left" />}K
                    <button className='data_visualization_btn'>Data Visualization</button>
                </div>
                <div className=' rotate-180 flex gap-2'>
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-6 rounded-md bg-gray-300"></div>
                    {/* <span className="text-xs text-gray-500 mt-1">2022</span> */}
                  </div>

                  <div className="flex flex-col items-center">
                      <div className="h-24 w-6 rounded-md bg-yellow-400"></div>
                      {/* <span className="text-xs text-gray-500 mt-1">2021</span> */}
                  </div>

                  <div className="flex flex-col items-center">
                      <div className="h-16 w-6 rounded-md bg-gray-300"></div>
                      {/* <span className="text-xs text-gray-500 mt-1">2020</span> */}
                  </div>

                  <div className="flex flex-col items-center">
                      <div className="h-8 w-6 rounded-md bg-gray-300"></div>
                      {/* <span className="text-xs text-gray-500 mt-1">2019</span> */}
                  </div>

                  <div className="flex flex-col items-center">
                      <div className="h-16 w-6 rounded-md bg-gray-300"></div>
                      {/* <span className="text-xs text-gray-500 mt-1">2019</span> */}
                  </div>
                </div>

            </section>
          </motion.div>
        </div>

        <div className='text-black text-center mt-20 mb-4'>
          <h1 className='text-xl font-semibold'>Monitoring key indicators</h1>
          <p className='text-sm font-light'>Analytic performance allows business to track <br /> KIPs, an important tool for measuring sucess <br /> and acheiving goals.</p>
        </div>
    </motion.section>
  )
}

export default Info_2