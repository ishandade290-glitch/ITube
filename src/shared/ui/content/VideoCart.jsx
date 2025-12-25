import { Link } from "react-router";
import { getChannelUrl, getVideoUrl } from "../../../features/api";
import { formatVideoData } from "../../../features/converters/format-video";
import { useEffect, useState } from "react";
import axios from "axios";

  function parseDurationToTime(duration) {
    const regex = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?$/;
    const match = duration.match(regex);
    
    if (!match) {
      throw new Error('Invalid duration format. Expected ISO 8601 format (e.g., PT45M42S)');
    }
    
    const hours = parseInt(match[1] || 0);
    const minutes = parseInt(match[2] || 0);
    const seconds = Math.floor(parseFloat(match[3] || 0));
    
    const totalMinutes = hours * 60 + minutes;
    
    const formattedMinutes = totalMinutes.toString();
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    return `${formattedMinutes}:${formattedSeconds}`;
  }

export default function VideoCard({videoWatchUrl,img,title,channelName,views,publishedAt,time,channelId,channelImg}) {

  const [channel, setChannel] = useState(null)
  
  const fetchChannel = async () =>{
    const response = await axios.get(getChannelUrl(channelId))
    console.log(response.data.items[0])
    setChannel(response.data.items[0])
  }

  const duration = parseDurationToTime(time)

  useEffect(()=>{
    fetchChannel()
  },[])



  return (
    <Link to ={videoWatchUrl} className="w-full cursor-pointer rounded-xl border-4 shadow-xl/30 hover:not-focus:bg-indigo-700 ">
      <div className="relative aspect-video rounded-b-lg overflow-hidden group bg-black">
        <img
          src={img}
          alt="preview"
          className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
     
        <div className=" absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-t from-black/40 via-transparent to-transparent" />
     
        <span className=" absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
          {duration}
        </span>
      </div>
      <div className="flex gap-3 mt-3">
        <div />
        <img src={channel?.snippet?.thumbnails?.default?.url} className="shrink-0 w-9 h-9 rounded-full" />
        <div className="flex flex-col text-white gap-1">
          <h3
            className="
            text-black text-sm font-medium
            line-clamp-2">
            {title}
          </h3>
          <p className="text-neutral-400 text-xs">{channelName}</p>
          <p className="text-neutral-400 text-xs">
            {views} {publishedAt}
          </p>
        </div>
      </div>
    </Link>
  );
}
