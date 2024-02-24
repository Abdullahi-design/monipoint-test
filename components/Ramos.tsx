"use client"

import Image from 'next/image';
import { MdAdd } from 'react-icons/md';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Ramos = () => {
  const points = [
    { id: 1, name: 'Instant Insights', icon: <MdAdd className="w-3 h-3" /> },
    { id: 2, name: 'AI technology', icon: <MdAdd className="w-3 h-3" /> },
    { id: 3, name: 'Easy Integration', icon: <MdAdd className="w-3 h-3" /> },
  ];

  const controls = useAnimation();
  const buttonsControls = useAnimation();

  const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1 });
            buttonsControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
        }
    }, [inView, controls]);

    const pointVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

  return (
    <motion.section
      className="bg-slate-50 rounded-3xl p-4 py-12 font-jost"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between px-12">
        <h1 className="text-4xl my-4">Your key to strategic <br /> success through analysis</h1>
        <h2 className="text-xl font-light">
          Ready for exciting instantaneous. <br /> all-accessible insights in real time?
        </h2>
      </div>

      <div className="flex justify-between px-32">
        <div>
          {points.map((point) => (
            <motion.ul
              key={point.id}
              className="py-3"
              variants={pointVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={buttonsControls}
              className="bg-white cursor-pointer flex justify-between gap-12 p-3 px-3 rounded-2xl shadow-lg">
                <h1>{point.name}</h1>
                <span className="bg-gray-200 p-3 -mt-1 rounded-full">{point.icon}</span>
              </motion.div>
            </motion.ul>
          ))}
        </div>

        <div className="absolute -right-20">
          <Image
            src="/assets/images/mobile-mocup.jpg"
            alt="logo"
            width={600}
            height={600}
            className="object-contain rounded-xl"
          />
        </div>
      </div>

        <div className="flex justify-center">
            {/* Word-by-word animation for the word "Ramos" */}
            {['R', 'a', 'm', 'o', 's'].map((letter, index) => (
            <motion.div
                key={index}
                className="text-[#fe4a23] ramos_text main"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
            >
                {letter}
            </motion.div>
            ))}
        </div>
    </motion.section>
  );
};

export default Ramos;
