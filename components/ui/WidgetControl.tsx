"use client"

import Image from 'next/image'
import CountUp from 'react-countup';
import { LiaArrowAltCircleUpSolid } from "react-icons/lia";

const WidgetControl = () => {
  return (
    <section className='bg-[#0d0d0d] px-24 p-4 font-jost rounded-2xl'>
        <div className='flex gap-4 mt-12'>
            <Image
            src='/assets/images/widget-control.png'
            alt='logo'
            width={130}
            height={130}
            className='object-contain rounded-2xl border border-slate-700'
            />

            <div className='bg-[#131111] px-10 p-7 rounded-2xl border border-slate-700'>
                <h1 className='text-xs text-left text-white'>Transactions</h1>
                <div className='text-white text-center mt-3'>
                    <span className=''>
                        <LiaArrowAltCircleUpSolid className='absolute mx-12  -mt-2 w-6 h-6 text-white bg-green-500 rounded-full p-1'/>
                    </span>
                    <CountUp start={0} end={43} duration={2} className="text-white text-xl mt-2 text-center" />K
                </div>
            </div>
        </div>

        <div className='text-white text-center mt-12'>
            <h1 className='text-xl font-semibold'>Widget control</h1>
            <p className='text-sm font-light'>Reports provide a comprehensive overview <br /> of important aspect of web analysis</p>
        </div>
    </section>
  )
}

export default WidgetControl