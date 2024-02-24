"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { TbWaveSawTool } from 'react-icons/tb';
import { useInView } from 'react-intersection-observer';

const Efficiency = () => {
  const containerControls = useAnimation();
  const iconControls = useAnimation();
  const textControls = useAnimation();
  const headingControls = useAnimation();
  const buttonsControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
        const sequence = async () => {
            await containerControls.start({ opacity: 1, transition: { duration: 1 } });
            await iconControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
            await textControls.start({ opacity: 1, transition: { duration: 0.2 } }); // Adjust the duration
            await headingControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
            await buttonsControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
        };
    
        sequence();
        }
    }, [inView, containerControls, iconControls, textControls, headingControls, buttonsControls]);
  
  return (
    <section className="w-full font-jost my-24 text-slate-900" ref={ref}>
      <div className="mx-12">
        <motion.h1
          className="text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={headingControls}
        >
          Maximize <span className=" text-gray-400">efficiency</span>
        </motion.h1>{' '}
        <br />
        <motion.h1
          className="text-8xl mt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={headingControls}
        >
          with our intuitive
        </motion.h1>
      </div>

      <div className="flex justify-between mt-8 px-4 ml-32">
        <section className="flex w-1/2 relative">
          <motion.div
            className="absolute z-10 bg-gray-200 p-8 w-fit h-fit rounded-full"
            initial={{ opacity: 0 }}
            animate={containerControls}
          >
            <motion.p
              className="bg-[#fe4a23] h-fit w-fit rounded-md"
              initial={{ opacity: 0, y: 20 }}
              animate={iconControls}
            >
              <TbWaveSawTool className="w-8 h-8 text-white" />
            </motion.p>
          </motion.div>

          <motion.div
            className="absolute left-20 bg-yellow-500 text-center p-5 w-fit h-fit rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={textControls}
          >
            <motion.h1 className="text-black text-xs">
              {' '}
              <span className="text-lg">45%</span> <br /> System grow <br /> faster
            </motion.h1>
          </motion.div>
        </section>

        <div className="bg-yellow-500 p-4 text-white text-5xl h-fit w-fit rounded-full">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: '100%', opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
          >
            Analytics service
          </motion.div>
        </div>
      </div>

      <div className="border-t my-12 mt-24 border-gray-300 w-[80%] mx-auto"></div>

      <div className="my-4 mx-20 p-4 flex justify-between">
        <motion.h1
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={headingControls}
        >
          Explore traffic sources, page behaviour, conversions and more to gain deep insight <br /> into your
          audience. With us, your business doesn't just adapt - it evolves
        </motion.h1>

        <div className="flex gap-2">
            <motion.button
                className="demo_btn"
                initial={{ opacity: 0, y: 2 }}
                animate={buttonsControls}
            >
                Request a demo
            </motion.button>
            <motion.button
                className="start_btn"
                initial={{ opacity: 0, y: 20 }}
                animate={buttonsControls}
            >
                Start for free
            </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Efficiency;
