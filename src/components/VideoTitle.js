const VideoTitle = ({movieTitle,movieOverview}) => {
    return (
      <div className="w-screen aspect-video pt-[20%] bg-black text-white bg-opacity-20 pl-10 p-4 absolute">
        <h2 className="font-bold text-4xl">{movieTitle}</h2>
        <p className="text-sm pt-4  w-1/4">{movieOverview}</p>
        <div className="pt-4">
          <button className="py-2 px-6 bg-white text-black rounded-lg font-semibold hover:bg-opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth={0}
              stroke="currentColor"
              className="w-6 h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
            Play
          </button>

          <button className="ml-2 py-2 px-6 bg-gray-500 bg-opacity-50 text-black rounded-lg font-normal hover:bg-opacity-65">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            <span className="relative top-[2px] left-1 text-white font-semibold">More Info</span>
          </button>
        </div>
      </div>
    );
};

export default VideoTitle;