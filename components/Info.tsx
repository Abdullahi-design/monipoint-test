import Image from 'next/image'
import { AiOutlineLink } from "react-icons/ai";

const Info = () => {
  return (
    <section className='w-full font-jost my-24'>
     
      <div className=" mx-12">
        <h1 className="text-8xl">We give you full</h1> <br />
        <h1 className="text-8xl mt-3"><span className=" text-gray-400">control</span> over your data</h1>
      </div>

      <div className='flex justify-around px-32 '>
        <Image
          src='/assets/images/info-1.png'
          alt='logo'
          width={300}
          height={300}
          className='object-contain rounded-xl shadow-xl'
        />

        <Image
          src='/assets/images/info-2.png'
          alt='logo'
          width={300}
          height={300}
          className='object-contain rounded-xl shadow-xl shadow-gray-500'
        />
      </div>

      <div className='mx-auto text-center mt-52'>
        <span className='bg-[#fe4a23] p-2 flex justify-center mx-auto w-fit text-white rounded-2xl'>
          <AiOutlineLink className='w-20 h-20'/>
        </span>
        <h1 className='text-9xl my-5'>Get Started</h1>
        <p className=' font-light text-xl'>Turn information into advantage! Start using <br /> Ramos today. Sign up for a free trial.</p>
        
        <div className="flex gap-2 justify-center my-8">
          <button className="demo_btn">Request a demo</button>
          <button className="start_btn">Start for free</button>
        </div>
      </div>
    </section>
  )
}

export default Info