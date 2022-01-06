import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import {
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';

const sliderConfiguration = {
  gap: 20,
  perView: 4,
  startAt: 0,
};

const CarouselSlider = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const slider = new Glide('.glide', sliderConfiguration);

  useEffect(() => {
    slider.mount();
  }, [slider]);

  return (
    <>
      {' '}
      <div className='glide relative'>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>
            <li className='glide__slide slider h-56 bg-gray-300 rounded-xl'>
              <div className='h-56'></div>
            </li>
            <li className='glide__slide slider h-56 bg-gray-300 rounded-xl'>
              <div className='h-56'></div>
            </li>
            <li className='glide__slide slider h-56 bg-gray-300 rounded-xl'>
              <div className='h-56'></div>
            </li>
            <li className='glide__slide slider h-56 bg-gray-300 rounded-xl'>
              <div className='h-56'></div>
            </li>
            <li className='glide__slide slider h-56 bg-gray-300 rounded-xl'>
              <div className='h-56'></div>
            </li>
            <li className='glide__slide slider h-56 bg-gray-300 rounded-xl'>
              <div className='h-56'></div>
            </li>
            <li className='glide__slide slider h-56 bg-gray-300 rounded-xl'>
              <div className='h-56'></div>
            </li>
            <li className='glide__slide slider h-56 bg-gray-300 rounded-xl'>
              <div className='h-56'></div>
            </li>
          </ul>
        </div>
        <div
          className='glide__arrows absolute top-20 w-full'
          data-glide-el='controls'
        >
          <button
            className='glide__arrow glide__arrow--prev absolute left-0'
            data-glide-dir='<'
          >
            <LeftOutlined style={{ fontSize: '3rem', color: '#eee' }} />
          </button>
          <button
            className='glide__arrow glide__arrow--next  absolute right-0'
            data-glide-dir='>'
          >
            <RightOutlined style={{ fontSize: '3rem', color: '#eee' }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CarouselSlider;
