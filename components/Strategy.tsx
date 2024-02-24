import Image from 'next/image'
import React from 'react'

const Strategy = () => {
  return (
    <section className=' bg-slate-50 rounded-3xl p-4 py-12 font-jost'>
      <div className='flex justify-between px-12'>
        <h1 className='text-4xl my-4'>Your key to strategic <br /> sucess through analysis</h1>
        <h2 className='text-xl font-light'>Ready for exciting instantaneous. <br /> all-accessible insights in real time?</h2>
      </div>

      <div className='flex justify-around px-32 '>
        <Image
          src='/assets/images/stats.png'
          alt='logo'
          width={450}
          height={450}
          className='object-contain rounded-xl shadow-xl'
        />

        <Image
          src='/assets/images/widget-control.png'
          alt='logo'
          width={320}
          height={320}
          className='object-contain rounded-xl shadow-xl shadow-gray-500'
        />
      </div>

      <div className='flex justify-center mt-16 gap-5'>
        <p className='mt-12'>up to</p>
        <h1 className='text-8xl'>45%</h1>
        <article>Increase your analytics by up to 45%. Unique <br /> algorithm provide insights from data reduce time for analysis <br /> and save time for making important informed decisions</article>
      </div>
    </section>
  )
}

export default Strategy