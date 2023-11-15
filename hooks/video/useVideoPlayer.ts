import { useState, useEffect } from "react";

type PlayerState = {
  isPlaying: boolean;
};
const useVideoPlayer = (videoElement: any) => {
  const [playerState, setPlayerState] = useState<PlayerState>({
    isPlaying: false,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current?.play()
      : videoElement.current?.pause();
  }, [playerState.isPlaying, videoElement]);

  return {
    playerState,
    togglePlay,
  };
};

export default useVideoPlayer;
