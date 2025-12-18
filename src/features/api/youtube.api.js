export const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export const YOUTUBE_URL = "https://www.youtube.com";

const KEY = "AIzaSyC8Gy2QyoxUv6NEY0bs-DkxWxTGVLyLRuw";

// Получение видео
export const getVideoUrl = (nextPageToken, maxResult = 8) =>
  `${BASE_URL}/videos?&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=RU&maxResults=${maxResult}&` +
  `pageToken=${nextPageToken ?? ""}&key=${KEY}`;

// Получение видео по id
export const getVideoByIdUrl = (videoId) =>
  `${BASE_URL}/videos?&part=snippet,contentDetails,statistics&id=${videoId}` +
  `&key=${KEY}`;

// Получение канала по id
export const getChannelUrl = (channelId) =>
  `${BASE_URL}/channels?part=snippet&id=${channelId}&key=${KEY}`;

// Получение канала по id с статистикой
export const getChannelWithStatisticUrl = (channelId) =>
  `${BASE_URL}/channels?part=snippet,statistics&id=${channelId}&key=${KEY}`;

// Получение результатов по поиску
export const getSearchUrl = (search_query, pageToken = "", maxResult = 8) =>
  `${BASE_URL}/search?part=snippet&type=video&videoDuration=medium` +
  `&maxResults=${maxResult}&pageToken=${pageToken}&q=${search_query}&key=${KEY}`;

// Получение видео по id
export const getVideoPartUrl = (idVideo) =>
  `${BASE_URL}/videos?part=contentDetails, statistics` +
  `&id=${idVideo}&key=${KEY}`;

export const getVideoByMainVideoUrl = (videoTitle) =>
  `${BASE_URL}/search?part=snippet&maxResults=8&type=video&order=viewCount&videoDuration=medium&order=rating` +
  `&q=${videoTitle}&key=${KEY}`;

export const getCommentByVideoUrl = (videoId, pageToken = "") =>
  `${BASE_URL}/commentThreads?part=snippet,replies&order=relevance&textFormat=plainText&maxResults=8` +
  `&pageToken=${pageToken}&videoId=${videoId}&key=${KEY}`;

export const videoInfoUrl = `${YOUTUBE_URL}/youtubei/v1/player`;

export const urlForSearchVariation = (searchQuery) =>
  `https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`;
