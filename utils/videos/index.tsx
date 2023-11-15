import useVideoPlayer from "@/hooks/video/useVideoPlayer";
import { Image } from "antd";
import React, { useEffect, useRef } from "react";

type VideoPlayerProps = {
  videoUrl: string;
  videoIcon?: string;
  videoClassNameList?: string;
  wrapperClassNameList?: string;
  isBackground?: boolean;
  videoToggleKey?: number;
};
export default function VideoPlayer({
  videoUrl,
  videoIcon,
  videoClassNameList,
  wrapperClassNameList,
  isBackground,
  videoToggleKey,
}: VideoPlayerProps) {
  const videoElement = useRef<HTMLVideoElement | null>(null);
  const { playerState, togglePlay } = useVideoPlayer(videoElement);

  const handleToggle = () => {
    togglePlay();
  };

  useEffect(() => {
    if (videoToggleKey && videoToggleKey > 1) {
      handleToggle();
    }
  }, [videoToggleKey]);
  return (
    <div
      className={`relative flex cursor-pointer items-center justify-center overflow-hidden rounded-[30px] border-[5px] border-white ${
        wrapperClassNameList ? wrapperClassNameList : ""
      }`}
      onClick={handleToggle}
    >
      {isBackground && (
        <div className="video-bg-image absolute left-[50%] top-[50%] z-10 flex  translate-x-[-50%] translate-y-[-50%] items-center justify-center">
          <img
            src="/assets/white-video-bg.png"
            alt="bg"
            className="h-full w-full"
          />
        </div>
      )}
      <video
        className={`relative z-20 max-h-[325px] max-w-[300px] rounded-[25px] sm:max-w-[400px] md:max-w-[525px] ${
          videoClassNameList ? videoClassNameList : ""
        }`}
        id="video"
        preload="metadata"
        ref={videoElement}
        src={videoUrl}
      />

      {!playerState.isPlaying && (
        <div
          className="video-player-bg absolute left-[50%] top-[50%] z-30
      translate-x-[-50%] translate-y-[-50%] "
        >
          <Image
            onClick={handleToggle}
            className=" flex cursor-pointer"
            src={videoIcon ? videoIcon : "/assets/header-play-button.png"}
            alt="play-button"
            width={100}
            height={100}
            preview={false}
          />
        </div>
      )}
    </div>
  );
}
