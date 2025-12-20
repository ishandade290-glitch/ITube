import { useState } from "react";
import Header from "../../widgets/header";
import { useEffect } from "react";
import axios from "axios";
import { getVideoUrl } from "../../features/api";
import { formatVideoData } from "../../features/converters/format-video";
import VideoCart from "../../shared/ui/content/VideoCart";

const MainPage = () => {
    const [videos, setVideos] = useState([])
    const [nextPageToken, setNextPageToken ] = useState("")

    const fetchVideos = async () => {
      const response = await axios.get(getVideoUrl(nextPageToken))
      setNextPageToken(response.data.nextPageToken)

      setVideos((prevVideos)=>[...prevVideos, ...response.data.items.map(formatVideoData)])
    };
    useEffect(()=>{
      fetchVideos()
    },[])
  
  return (
  <>
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 mt-6 ml-4 mr-4">
      {videos.map((video) => (
      <VideoCart key={video.videoWatchUrl} {...video}/>
      ))}
      <button onClick = {fetchVideos}>Load more</button>
    </div>
  </>
  );
};

export default MainPage;
