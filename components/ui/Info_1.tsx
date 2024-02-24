"use client"

import Image from 'next/image'
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaUserCircle } from "react-icons/fa";
import { WiRain } from "react-icons/wi";

const Info_1 = () => {
    const [ref, inView] = useInView({ triggerOnce: true });
    const [shouldAnimate, setShouldAnimate] = useState(false);
  
    useEffect(() => {
      if (inView) {
        setShouldAnimate(true);
      }
    }, [inView]);
  return (
    <section className='bg-[#f9f9f9] px-20 p-4 font-jost rounded-2xl my-12 shadow shadow-gray-700' ref={ref}>
        <div className='flex gap-4 mt-4'>

          <div className='bg-white text-center px-8 py-10 p-7 rounded-2xl border border-gray-100 shadow-xl'>
            <h1 className='text-sm text-black font-semibold text-center'>Conversion rate</h1>
            <p className="absolute bg-white p-2 -mt-1 -mx-1 w-fit h-fit rounded-full border">
              <WiRain className="w-3 h-3 text-black bg-gray-200 rounded-full" />
            </p>
            <div className='text-black bg-yellow-400 p-2 rounded-xl text-5xl text-center mt-3'>
              <h1>2,3%</h1>
            </div>
            <p className='text-gray-400'>Percentage of <br /> website visitors</p>
          </div>

          <div className='absolute mx-40 mt-8 bg-white  px-8 py-5 p-7 rounded-2xl border border-gray-100 shadow-xl'>
            <h1 className='text-sm text-black font-normal text-left mb-3'>Sales revenue</h1>
            {shouldAnimate && <CountUp start={0} end={131.2} duration={2} prefix='$' className="text-black text-xl my-3 text-left" />}K
            <div className='flex gap-2 my-4'>
              <div className="h-1 px-4 rounded-full bg-[#4CAF50]"></div>
              <div className="h-1 px-4 rounded-full bg-yellow-400"></div>
              <div className="h-1 px-4 rounded-full bg-[#4CAF50]"></div>
            </div>
            <div className='my-6 space-y-2'>
              <p className='flex justify-between'>
                <FaUserCircle className='w-4 h-4 text-orange-500'/>
                <span className='text-xs font-light'>Min price</span>
                <span className='text-xs font-normal'>1,200$</span>
              </p>
              <p className='flex justify-between'>
                <FaUserCircle className='w-4 h-4 text-green-500'/>
                <span className='text-xs font-light'>Max price</span>
                <span className='text-xs font-normal'>2,320$</span>
              </p>

              <p className='border border-gray-300 w-[80%] mx-auto mt-6'></p>
              <p className='text-left mt-12 gap-2 space-x-3'>
                <span className='text-xs font-light'>Engagement rate</span>
                <span className='text-xs font-normal'>47.84%</span>
              </p>
            </div>
          </div>
        </div>

        <div className='text-black text-center mt-20 mb-4'>
            <h1 className='text-xl font-semibold'>Improve customer service</h1>
            <p className='text-sm font-light'>Analytic helps optimize service processes by <br /> providing information on how to improve interactions <br /> with customer and increase their satisfaction</p>
        </div>
    </section>
  )
}

export default Info_1