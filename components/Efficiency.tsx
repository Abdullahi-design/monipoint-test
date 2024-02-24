import Image from "next/image";
import { GiElectric } from "react-icons/gi";

const Efficiency = () => {
  return (
    <section className="w-full font-jost my-24 text-slate-900">
      <div className=" mx-12">
        <h1 className="text-8xl">Maximize <span className=" text-gray-400">efficiency</span></h1> <br />
        <h1 className="text-8xl mt-3">with our intuitive</h1>
      </div>

        <div className="flex justify-between mt-8 px-4 ml-32">
            <Image
            src='/assets/images/discount.png'
            alt='logo'
            width={200}
            height={200}
            className='object-contain rounded-md'
            />

            <div className="bg-yellow-500 p-4 text-white text-7xl rounded-full">Analytics service</div>
        </div>

        <div className="border-t my-6 border-gray-300 w-[80%] mx-auto"></div>

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