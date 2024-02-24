"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { TbWaveSawTool } from "react-icons/tb";

const Efficiency = () => {
  return (
    <section className="w-full font-jost my-24 text-slate-900">
      <div className=" mx-12">
        <h1 className="text-8xl">Maximize <span className=" text-gray-400">efficiency</span></h1> <br />
        <h1 className="text-8xl mt-3">with our intuitive</h1>
      </div>

        <div className="flex justify-between mt-8 px-4 ml-32">
            {/* <Image
                src='/assets/images/discount.png'
                alt='logo'
                width={200}
                height={200}
                className='object-contain rounded-md'
            /> */}

            <section className="flex w-1/2 relative">

                <div className="absolute z-10 bg-gray-200 p-8 w-fit h-fit rounded-full">
                    <p className=" bg-[#fe4a23] h-fit w-fit rounded-md">
                        <TbWaveSawTool className="w-8 h-8 text-white" />
                    </p>
                </div>

                <div className="absolute left-20 bg-yellow-500 text-center p-5 w-fit h-fit rounded-full">
                    <h1 className="text-black text-xs"> <span className="text-lg">45%</span> <br /> System grow <br /> faster</h1>
                </div>

            </section>

            <div
            className="bg-yellow-500 p-4 text-white text-5xl h-fit w-fit rounded-full"
            >
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

        <div className="my-4 p-4 flex justify-between">
            <h1 className="text-xl">Explore traffic sources, page behaviour, conversions and more to gain deep insight <br /> into your audience. With us, your business doesn't just adapt - it evolves</h1>

            <div className="flex gap-2">
                <button className="demo_btn">Request a demo</button>
                <button className="start_btn">Start for free</button>
            </div>
        </div>
    </section>
  )
}

export default Efficiency