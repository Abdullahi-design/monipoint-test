"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';

const Nav = () => {
  const items = [
    { id: 1, name: 'Dashboard' },
    { id: 2, name: 'Reports' },
    { id: 3, name: 'Documents' },
    { id: 4, name: 'History' },
    { id: 5, name: 'Settings' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemTransition = { duration: 0.8, ease: 'easeInOut' };

  return (
    <nav className="flex justify-between bg-[#0d0d0d] rounded-xl mt-2 px-4 mx-12">
      <motion.div
        className="flex justify-start text-xl w-fit h-fit mt-5"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <Link href="/" className="flex gap-2">
          <AiOutlineLink className="w-6 h-6 text-white" />
          <h1 className="text-white">ramos</h1>
        </Link>
      </motion.div>

      <div
        className="flex items-center text-white my-2 bg-gray-200 bg-opacity-20 rounded-2xl"
        // initial={{ opacity: 0, y: 20 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.5 }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...itemTransition, delay: 0.5 }}
            className="px-4 cursor-pointer"
          >
            {item.name}
          </motion.div>
        ))}
      </div>

      <motion.button
        type="button"
        className="my-2 auth_black_btn"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 1 }}
      >
        Sign Up
      </motion.button>
    </nav>
  );
};

export default Nav;
