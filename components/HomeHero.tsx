"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MdOutlineInsights } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";

const HomeHero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const textTransition = { duration: 0.8, ease: 'easeInOut' };

  return (
    <section className="w-full font-jost my-24 text-slate-900">
      <div className="flex justify-center gap-10">
        <div>
          <div className="flex justify-around h-fit mt-12 gap-4">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ ...textTransition, delay: 0.5 }}
            >
              <div className='flex w-1/2 relative'>
                <p className="absolute z-10 -left-10 bg-gray-200 p-6 w-fit h-fit rounded-full">
                  <BsFillLightningChargeFill className="w-7 h-7 text-[#fe4a23]" />
                </p>
                <p className="bg-[#fe4a23] left-6 z-20 absolute p-6 w-fit h-fit rounded-full">
                  <MdOutlineInsights className="w-7 h-7 text-white" />
              </p>
              </div>
            </motion.div>
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ ...textTransition, delay: 0.8 }}
              className="text-8xl"
            >
              Analytics
            </motion.h1>
          </div>
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...textTransition, delay: 1 }}
            className="text-8xl mt-3"
          >
            that <span className=" text-gray-400">helps</span> you
          </motion.h1>
        </div>

        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...textTransition, delay: 0.5 }}
          className="mt-6 rounded-full"
        >
          <Image
            src="/assets/images/laptop.png"
            alt="logo"
            width={250}
            height={250}
            className="object-contain rounded-md"
          />
        </motion.div>
      </div>

      <div className="flex justify-center ml-32">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...textTransition, delay: 1 }}
          className="text-8xl mt-3"
        >
          shape
        </motion.h1>
        <div className="mt-8 mx-2 bg-yellow-400 text-center p-5 py-6 w-fit h-fit rounded-full">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...textTransition, delay: 1.2 }}
            className="object-contain -mt-3 rounded-full font-bold"
          >
            <Image
              src="/assets/images/sound-waveform.svg"
              alt="logo"
              width={33}
              height={33}
            />
          </motion.div>
        </div>
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...textTransition, delay: 1.4 }}
          className="text-8xl mt-3"
        >
          the future
        </motion.h1>
      </div>
    </section>
  );
};

export default HomeHero;
