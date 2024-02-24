import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

const Nav = () => {
    const items = [
        {id: 1, name: "Dashboard"},
        {id: 2, name: "Reports"},
        {id: 3, name: "Documents"},
        {id: 4, name: "History"},
        {id: 5, name: "Settings"},
    ]
  return (
    <nav className="flex justify-between bg-[#0d0d0d] rounded-xl mt-2 px-4 mx-12">
        <div className="flex justify-start text-xl w-fit h-fit mt-5">
            <Link href='/' className='flex gap-2'>
                <AiOutlineLink className="w-6 h-6 text-white"/>
                <h1 className="text-white">ramos</h1>
            </Link>
        </div>

        <div className="flex items-center text-white my-2 bg-gray-200 bg-opacity-20 rounded-2xl">
            {items.map(item => (
                <div key={item.id} className="px-4 cursor-pointer">{item.name}</div>
            ))}
        </div>

        <button
            type='button'
            className='my-2 auth_black_btn'
        >
            Sign Up
        </button>
    </nav>
  )
}

export default Nav