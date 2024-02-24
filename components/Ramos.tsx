import Image from 'next/image'
import { MdAdd } from "react-icons/md";

const Ramos = () => {
    const points = [
        {id: 1, name: "Instant Insights", icon: <MdAdd className="w-3 h-3"/>},
        {id: 2, name: "AI technology", icon: <MdAdd className="w-3 h-3"/>},
        {id: 3, name: "Easy Integration", icon: <MdAdd className="w-3 h-3"/>},
    ]
  return (
    <section className=' bg-slate-50 rounded-3xl p-4 py-12 font-jost'>
        <div className='flex justify-between px-12'>
            <h1 className='text-4xl my-4'>Your key to strategic <br /> sucess through analysis</h1>
            <h2 className='text-xl font-light'>Ready for exciting instantaneous. <br /> all-accessible insights in real time?</h2>
        </div>

        <div className='flex justify-between px-32'>

            <div>
                {points.map((point) => (
                    <ul 
                    key={point.id} 
                    className='py-3'
                    >
                        <div className='bg-white cursor-pointer flex justify-between gap-12 p-3 px-3 rounded-2xl shadow-lg'>
                            <h1>{point.name}</h1>
                            <span className='bg-gray-200 p-3 -mt-1 rounded-full'>{point.icon}</span>
                        </div>
                    </ul>
                ))}
            </div>

            <div className=' absolute -right-20'>
                <Image
                src='/assets/images/mobile-mocup.jpg'
                alt='logo'
                width={600}
                height={600}
                className='object-contain rounded-xl'
                />
            </div>
        </div>

        <div className='flex justify-center'>
            <h1 className=' text-[#fe4a23] ramos_text main'>Ramos</h1>
        </div>
    </section>
  )
}

export default Ramos