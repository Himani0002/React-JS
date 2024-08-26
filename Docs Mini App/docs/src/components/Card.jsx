import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6"

function Card() {
  return (
    <>
      <div className="relative w-60 h-72 rounded-[30px] py-10 px-8 overflow-hidden bg-zinc-900/90 text-white">

        <FaFileAlt />
        <p className="text-xs leading-tight mt-5 font-semibold">Lorem ipsum dolor sit amet consectetur.</p>



        <div className='footer absolute bottom-0 w-full  left-0 px-8'>
          <div className="flex items-center justify-between mb-5">
            <h5>.4mb</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center  justify-center py-3">
              <FaDownload size={9} color="#fff" />
            </span>

          </div>
        </div>

      </div >

    </>
  )
}

export default Card
