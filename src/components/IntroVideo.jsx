import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import meal from "../assets/meal.mp4";
const IntroVideo = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  return (
    <div className="relative py-12">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidRef}
      />
      <div
        className={`absolute top-0 left-0 w-[100%] h-[100%] ${
          !playVideo ? "bg-[#00000075]" : "bg-[#00000030]"
        }  flex justify-center items-center`}
      >
        <div
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;
