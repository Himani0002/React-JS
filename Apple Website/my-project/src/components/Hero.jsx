import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(getVideoSrc());

  function getVideoSrc() {
    return window.innerWidth < 760 ? smallHeroVideo : heroVideo;
  }

  useEffect(() => {
    const handleVideoSrcSet = () => {
      setVideoSrc(getVideoSrc());
    };

    window.addEventListener('resize', handleVideoSrcSet);
    handleVideoSrcSet(); // Set initial video source
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, []);

  return (
    <section className='nav-height bg-black relative'>
      <div className='h-60 flex items-center justify-center flex-col'>
        <p id="hero" className='hero-title'>
          IPhone 15 Pro
        </p>
      </div>
      <div className='md:w-10/12 w-9/12 mx-auto h-[60vh] relative'>
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="cta"
        className='flex flex-col items-center opacity-0 translate-y-20'>

        <a href="#hightlights" className='btn'>
          BUY
        </a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  );
}

export default Hero;
