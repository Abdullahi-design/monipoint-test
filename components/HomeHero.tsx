import Image from "next/image";
import { GiElectric } from "react-icons/gi";

const HomeHero = () => {
  return (
    <section className="w-full font-jost my-24 text-slate-900">
      <div className="flex justify-center gap-10">
        <div>
          <div className="flex justify-around h-fit mt-12 gap-4">
            <Image
              src='/assets/images/icons.png'
              alt='logo'
              width={120}
              height={120}
              className='object-contain'
            />
            <h1 className="text-8xl">Analytics</h1>
          </div>
          <h1 className="text-8xl mt-3">that <span className=" text-gray-400">helps</span> you</h1>

        </div>

        <div className="mt-6 rounded-full">
          <Image
            src='/assets/images/laptop.png'
            alt='logo'
            width={250}
            height={250}
            className='object-contain rounded-md'
          />
        </div>
      </div>

      <div className="flex justify-center ml-32">
        <h1 className="text-8xl mt-3">shape</h1>
        <div className="mt-6 mx-2 rounded-full">
          <Image
            src='/assets/images/voice-icon.png'
            alt='logo'
            width={80}
            height={80}
            className='object-contain rounded-md'
          />
        </div>
        <h1 className="text-8xl mt-3">the future</h1>
      </div>
    </section>
  )
}

export default HomeHero