import React from 'react';

const Experience = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className="lg:m-30 rounded-xl border border-gray-500 min-[320px]:m-10"
    >
      <div className="p-4">
        <h2 className="mb-2 text-xl font-medium">TechWave XR Experience</h2>
        <p>
          Step into the TechWave XR Experience—a world where virtual, augmented,
          and mixed realities converge, creating immersive, interactive
          environments for both entertainment and collaboration.
        </p>
      </div>

      <iframe
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/etGnGM6if6M?si=TOG3if7zJ7QKE_4g"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Experience;
