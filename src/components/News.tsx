import React from 'react';
import { mockNews } from '@/shared/constants';

const News = () => {
  return (
    <div className="flex flex-col gap-2 min-[320px]:p-10 lg:w-10/12">
      <h2 className="text-center font-medium min-[320px]:text-2xl lg:text-4xl">
        Stay Updated with TechWave XR
      </h2>
      <p className="min-[320px]:text-md text-center lg:text-xl">
        Keeping up-to-date with the latest in immersive technology is vital for
        enthusiasts and professionals alike. TechWave XR is at the forefront of
        extended reality (XR) innovations, blending virtual reality (VR),
        augmented reality (AR), and mixed reality (MR) into seamless
        experiences. To ensure you don't miss any new developments, product
        launches, or insider insights, we recommend utilizing a variety of
        resources.
      </p>
      <div className="min-[320px]:mt-4 lg:mt-10">
        {mockNews.map(({ source, details }) => (
          <div className="">
            <p className="min-[320px]:text-md font-medium min-[320px]:mt-2 lg:mt-4 lg:text-xl">
              {source}
            </p>
            <p>{details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
