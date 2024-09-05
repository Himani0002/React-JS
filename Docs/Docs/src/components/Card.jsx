import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

export const Card = ({ data, reference }) => {
  // Safeguard data.tag and data.close by providing default values
  const { desc, filesize, close = false, tag = {} } = data;
  const { isOpen = false, tagTitle = '', tagColor = '' } = tag;

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-60 h-72 py-10 px-5 rounded-[40px] bg-zinc-900 text-white overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">
        {desc}
      </p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3 px-8">
          <h5>{filesize}</h5>
          <span className='w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center'>
            {close ? <IoMdClose /> : <FiDownload size="0.7em" color="#fff" />}
          </span>
        </div>
        {
          isOpen && (
            <div className={`w-full flex items-center justify-center py-2 ${tagColor === "blue" ? "bg-blue-600" : "bg-green-500"}`}>
              <h3 className='text-sm font-semibold'>{tagTitle}</h3>
            </div>
          )
        }
      </div>
    </motion.div>
  );
};
