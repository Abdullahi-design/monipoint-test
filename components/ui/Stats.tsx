"use client"

import CountUp from 'react-countup';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { RiStackLine } from "react-icons/ri";
import { CiNoWaitingSign } from "react-icons/ci";
import Chart from "./Chart";

const Stats = () => {

  // Calculate the progress percentage based on the current sales and the target sales
  const salesTarget = 100; // Replace with your target sales amount
  const currentSales = 56; // Replace with your current sales amount
  const progressPercentage = (currentSales / salesTarget) * 100;

  const [ref, inView] = useInView({ triggerOnce: true });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setShouldAnimate(true);
    }
  }, [inView]);


  return (
    <section className='flex justify-between gap-4 border border-gray-400 bg-white h-full pb-20 px-8 rounded-xl p-4 font-jost' ref={ref}>

      <div className=''>
        <button className='stats_btn mt-6'>Setting up reports</button>
        <h1 className='text-xl mt-12'>Fast and easy access <br /> to analytics</h1>
        <p className='text-md font-light mt-4'>One platform is a comprehensive <br /> system of solutions that will be the <br /> first step towards digitalization <br /> of your business</p>
      </div>

      <div className="relative">
        <section className='relative h-full border-l border-t border-gray-400 rounded-xl p-4 mb-2'>
          <h1 className="my-4">Sales statistic</h1>
          <div className="flex justify-evenly gap-4">
            <p className="bg-[#fe4a23] p-4 w-fit h-fit rounded-full">
              <RiStackLine className="w-3 h-3 text-white" />
            </p>
            <div className="p-2">
              <h1 className="text-gray-500 text-md">Total Profit</h1>
              {shouldAnimate && <CountUp start={0} end={264.2} duration={2} prefix="$" className="text-black text-xl" />}K            </div>
            <div className="bg-gray-200 p-2 px-12 rounded-xl">
              <h1 className="text-gray-500 text-md">Visitors</h1>
              {/* Add progress bar here */}
              {shouldAnimate && (
                <div className="bg-gray-200 px-2 w-full rounded-xl">
                  <div className="h-2 w-16 rounded-full bg-gray-300">
                    <div className="h-full w-full rounded-full" style={{ width: `${progressPercentage}%`, backgroundColor: '#4CAF50' }}></div>
                    <CountUp start={0} end={currentSales} duration={2} separator="," prefix="$" className="text-black text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />K
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="absolute  mx-4 -mt-36 border-l border-t border-gray-400 rounded-xl p-4">
          <h1 className="text-md">Visit statistics</h1>
          {/* chat */}
          <Chart/>
        </section>

        <section className='text-white absolute z-20 bg-[#fe4a23] rounded-xl mx-72 -mt-2 p-3 w-fit h-fit'>
          <div className='flex justify-between'>
            <h1 className='text-sm'>Rate</h1>
            <CiNoWaitingSign />
          </div>
          <div className='px-3'>
            +<CountUp start={0} end={58} duration={2} prefix="$" className="text-white text-xl" />%
          </div>
        </section>
      </div>

    </section>
  )
}

export default Stats;
