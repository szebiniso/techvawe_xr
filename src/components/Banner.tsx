import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="flex flex-col items-center min-[320px]:p-10 lg:h-screen lg:p-0">
      <Image
        data-aos="zoom-in"
        src="/assets/xr-item.png"
        alt="/"
        width={500}
        height={500}
      />
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="mt-8 text-center min-[320px]:w-full lg:w-8/12"
      >
        <h1 className="mb-4 min-[320px]:text-4xl lg:text-6xl lg:font-medium">
          Techvawe XR
        </h1>
        <p className="lg:text-md min-[320px]:text-xl">
          Explore the future of digital interaction with TechWave XR, where
          immersive technology creates extraordinary experiences.
        </p>
      </div>
    </div>
  );
};

export default Banner;
