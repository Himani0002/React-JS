import React, { useRef } from 'react';
import { Card } from './Card';

export const Foreground = () => {
  const ref = useRef(null); // Move useRef inside the component

  const data = [
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green"
      },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue"
      },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Upload",
        tagColor: "green"
      },
    }
  ];

  return (
    <div>
      <div ref={ref} className='fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
};
