import React, { useEffect } from 'react';
import gsap from 'gsap';
import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useEffect(() => {
    gsap.to('#title', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.2 });
  }, []);

  return (
    <section id="highlights" className='w-screen overflow-hidden h-full common-padding bg-zinc-800 text-white'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full items-end justify-between md:flex'>
          <h1 id="title" className='section-heading opacity-0 translate-y-10 text-4xl font-bold mb-6 md:mb-0'>
            Get the Highlights
          </h1>

          <div className='flex flex-wrap items-center gap-5'>
            <div className='flex items-center link opacity-0 translate-y-10 transition-transform duration-300 hover:scale-105'>
              <p className='mr-2 font-medium text-lg cursor-pointer hover:text-yellow-400'>
                Watch the film
              </p>
              <img src={watchImg} alt="Watch the film" className='w-6 h-6 hover:scale-110 transition-transform duration-300' />
            </div>

            <div className='flex items-center link opacity-0 translate-y-10 transition-transform duration-300 hover:scale-105'>
              <p className='mr-2 font-medium text-lg cursor-pointer hover:text-yellow-400'>
                Watch the event
              </p>
              <img src={rightImg} alt="Watch the event" className='w-6 h-6 hover:scale-110 transition-transform duration-300' />
            </div>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
}

export default Highlights;
