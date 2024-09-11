import React, { useEffect, useState } from 'react';
import { hightlightsSlides } from '../constants';

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videospanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, secvideo] = useState({
    isEnd: false,
    stratPlay: false,
    videoId: 0,
    isLastVideo: false,
    idPlaying: false,
  })

  const { isEnd, isLastVideo, stratPlay, videoId, isPlaying } = video;

  useEffect(() => {

  }, [videoId, stratPlay])
  return (
    <>
      <div className='flex items-center'>
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className='sm:pr-20 pr-10 relative'>
            <div className='video-carousel_container'>
              <div className='w-full h-full flex justify-center items-center rounded-3xl overflow-hidden bg-black'>
                <video
                  id="video"
                  playsInline
                  preload='auto'
                  muted
                  className="w-full h-full object-cover"
                >
                  <source src={list.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Text overlay */}
              <div className='absolute top-12 left-[5%] z-10 text-white'>
                {list.textLists.map((text) =>
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}

                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default VideoCarousel;
