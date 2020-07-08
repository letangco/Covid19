import React from 'react';
import VideoItem from './VideoItem';
import PageYoutubeNews from './PageYoutubeNews';


const VideoList = (videos :any, handleVideoSelect:any) => {
    const renderedVideos :any=  videos.map((video:any) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        // console.log(video.id);
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;