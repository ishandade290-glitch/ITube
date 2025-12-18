export const formatVideoData = (data) => {
    const {id, snippet, statistics, contentDetails} = data;
    return {
        videoWatchUrl:`/watch?v=${id}`,
        img: snippet.thumbnails.medium.url,
        title: snippet.title,
        channelName: snippet.channelTitle,
        views: statistics.viewCount,
        publishedAt: snippet.publishedAt,
        time: contentDetails.duration,
        channelId: snippet.channelId,
        channelImg: snippet.channelThumbnail?.url,
    }
}