import { useSearchParams } from "react-router"
import { getVideoByIdUrl } from "../../features/api"
import { useEffect, useState } from "react"
import axios from "axios"


const WatchPageComponent = ({videoWatchUrl,img,title,channelName,views,publishedAt,time,channelId,channelImg})=>{
    const [video, setVideo] = useState(null)
    const [searchParams] = useSearchParams()
    
    const fetchVideo = async ()=>{
        const response = await axios.get(getVideoByIdUrl(videoId))
        setVideo(response.data)
    }
    
    const videoId = searchParams.get("v");

    useEffect(()=>{
        if (!videoId) return
        fetchVideo()
    },[])

    return(     
        <>
        <div className="mt-5 flex justify-center w-80%">
            <iframe className=" w-[80vv] h-[80vh]" width="420" height="315" src ={`https://www.youtube.com/embed/${videoId}`}></iframe>
            <h3 className="
            text-white text-sm font-medium
            line-clamp-2">
            {title}saaa</h3>
        </div>
        </>
)}
export default WatchPageComponent