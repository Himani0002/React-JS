import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className='bg-white text-black inline-block p-6 text-center rounded'>

        <div className="flex items-center justify-center">
          <img
            className="h-50 w-40 rounded-md mb-5"
            src={props.photo || "https://via.placeholder.com/150"}
            alt=""
          />
        </div>

        <h1 className='text-2xl font-semibold mb-4'>{props.username} Surname</h1>
        <h2>{props.city},{props.age}</h2>
        <h4 className='text-blue-400'> {props.prof}</h4>

        <button className='bg-emerald-700 text-white px-4 py-2 rounded font-medium mt-5 '>Add Friend</button>
      </div>
    </>
  )
}

export default Card
