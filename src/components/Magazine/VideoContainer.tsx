const VideoContainer = () => {
  return (
    <section>
      <h2 className="font-bold">What&apos;s New?</h2>
      <div className="shadow-card mx-auto mt-4 rounded-[10px] p-[10px]">
        <div className="relative h-0 w-full pb-[56.25%] lg:mx-auto">
          <iframe
            src={'https://www.youtube.com/embed/hC7YnQ8tj20'}
            className="absolute left-0 top-0 h-full w-full rounded-md"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoContainer;
