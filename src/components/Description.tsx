import React from 'react';
import Image from 'next/image';

const Description = () => {
  return (
    <div className="flex items-center justify-between min-[320px]:flex-col min-[320px]:p-10 lg:flex-row lg:p-40">
      <Image
        data-aos="fade-right"
        src="/assets/red-item.png"
        alt="/"
        width={500}
        height={500}
      />
      <div
        data-aos="fade-left"
        className="flex flex-col gap-4 min-[320px]:mt-10 min-[320px]:w-full lg:w-1/2"
      >
        <h2 className="font-medium min-[320px]:text-2xl lg:text-4xl">
          TechWave XR: The Future of Immersive Experiences
        </h2>
        <p className="min-[320px]:text-md lg:text-xl">
          TechWave XR is a revolutionary platform that merges virtual,
          augmented, and mixed realities into one seamless experience, offering
          users the ability to engage with digital environments in incredibly
          immersive and interactive ways. Ideal for both developers and
          enthusiasts, it unlocks new possibilities for creativity,
          collaboration, and entertainment.
        </p>
      </div>
    </div>
  );
};

export default Description;
