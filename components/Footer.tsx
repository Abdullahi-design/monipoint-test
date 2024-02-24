import Image from 'next/image'
import React from 'react'

const Footer = () => {
  const items = [
    {id: 1, name: "About"},
    {id: 2, name: "Why Us"},
    {id: 3, name: "Platform"},
    {id: 4, name: "Pricing"},
    {id: 5, name: "Contacts"},
  ]

  const socials = [
    {id: 1, name: "Linkedin"},
    {id: 2, name: "Instagram"},
    {id: 3, name: "Facebook"},
  ]
  return (
    <footer className='bg-[#0d0d0d] text-white font-jost'>
      <div className='flex my-16'>
        <div className='flex justify-around mt-5 mx-auto'>
          {items.map(item => (
            <ul key={item.id} className="px-4 cursor-pointer text-gray-400">{item.name}</ul>
          ))}
        </div>
        <h1 className='text-5xl px-20'>hello@ramos.com</h1>
      </div>

      <ul className='border border-gray-300 w-[80%] mx-auto my-20'></ul>

      <section className='flex justify-around'>

        <div className='flex gap-20 justify-between'>
          <address>
            <h1 className=' font-semibold text-xl'>Warrensville Heights</h1>
            <p className=' font-light text-lg text-gray-400'>14418 Vineyard Drive, NC <br />44128</p>
          </address>

          <address>
            <h1 className=' font-semibold text-xl'>Saint Louis</h1>
            <p className=' font-light text-lg text-gray-400'>1366 Penn Street <br /> 63101</p>
          </address>

        </div>

        <div className='space-y-3 text-xl'>{socials.map(social => (
          <ul key={social.id} className=''>{social.name}</ul>
        ))}</div>
      </section>

      <div className='flex justify-around px-32 mt-12'>
        <Image
          src='/assets/images/ramos_footer.png'
          alt='logo'
          width={450}
          height={450}
          className='object-contain rounded-xl shadow-xl'
        />

        <div className='flex gap-8 mt-12 text-gray-400'>
          <h1>Privacy policy</h1>
          <h1>License agreement</h1>
        </div>

        <Image
          src='/assets/images/QR.png'
          alt='logo'
          width={80}
          height={80}
          className='object-contain rounded-2xl'
        />
      </div>
    </footer>
  )
}

export default Footer