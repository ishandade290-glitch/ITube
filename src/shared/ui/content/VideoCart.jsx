import { getVideoUrl } from "../../../features/api";
import { formatVideoData } from "../../../features/converters/format-video";

export default function VideoCard({videoWatchUrl,img,title,channelName,views,publishedAt,time,channelId,channelImg}) {

    return (
      <div className="w-full cursor-pointer rounded-xl border-4 shadow-xl/30 hover:not-focus:bg-indigo-700 ">
        {}
        <div className="relative aspect-video rounded-b-lg overflow-hidden group bg-black">
          {}
          <img
            src={img}
            alt="preview"
            className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-110"
          />
  
          {}
          <div
            className="
              absolute inset-0
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              bg-linear-to-t from-black/40 via-transparent to-transparent
            "
          />
  
          {}
          <span className="
            absolute bottom-2 right-2
            bg-black/80 text-white text-xs
            px-1.5 py-0.5 rounded
          ">
            {time}
          </span>
        </div>
  
        {}
        <div className="flex gap-3 mt-3">
          {}
          <div/>
          <img src={channelImg}  className="shrink-0 w-9 h-9 rounded-full" />
          {}
          <div className="flex flex-col text-white gap-1">
            <h3 className="
              text-white text-sm font-medium
              line-clamp-2
            ">{title}
            </h3>
            <p className="text-neutral-400 text-xs">
              {channelName}
            </p>
            <p className="text-neutral-400 text-xs">
              {views}  {publishedAt}
            </p>
          </div>
        </div>
      </div>
    );
  }