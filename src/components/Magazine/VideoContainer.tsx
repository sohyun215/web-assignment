const VideoContainer = () => {
  return (
    <section>
      <h2 className="font-bold">What&apos;s New?</h2>
      <div className="shadow-card mt-4 h-[208px] rounded-[10px] p-[10px]">
        <iframe
          src={'https://www.youtube.com/embed/hC7YnQ8tj20'}
          className="h-full w-full rounded-md"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default VideoContainer;
