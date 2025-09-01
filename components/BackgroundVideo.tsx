// components/BackgroundVideo.tsx
export const BackgroundVideo = () => {
  return (
    <>
      <video
        className="fixed top-0 left-0 w-full h-screen object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
        poster="/landing_image.jpg"
      >
        <source src="/background_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-40" /> 
      </>
  );
};

