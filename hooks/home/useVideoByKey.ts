import client from "@/helpers/client";
import { Video } from "@/types/video";
import { useQuery } from "@tanstack/react-query";

const useVideoByKey = (key: string) => {
  const getVideo = async (): Promise<Video> => {
    const res = await client.get(`/api/v2/videos/getOneByKey/${key}`);
    return res.data;
  };
  const videoQuery = useQuery({
    queryKey: ["videos", key],
    queryFn: getVideo,
  });
  return {
    ...videoQuery,
  };
};

export default useVideoByKey;
