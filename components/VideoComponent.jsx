const VideoComponent = ({ videoLink }) => {
  return (
    <div className="w-[350px] h-[200px] md:w-[700px] md:h-[600px] lg:w-[900px] lg:h-[700px] xl:w-[1080px]">
      <iframe
        src={videoLink}
        title="YouTube video player"
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;
