import React from 'react';
import VideoItem from './VideoItem';
// import PageYoutubeNews from './PageYoutubeNews';
interface IProps{
    // video_item:any;
    videos:any;
    handleVideoSelect:any
}
class VideoList extends React.Component<IProps, any>{

    render() {
        var videos:any = this.props.videos;
        var handleVideoSelect:any = this.props.handleVideoSelect;
        const VideoList = (videos:any, handleVideoSelect:any) => {
            const renderedVideos =  videos.map((video:any) => {
                return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
                // console.log(video.id);
            });
        
            return <div className='ui relaxed divided list'>{renderedVideos}</div>;
        };
        return (
            <div>
                {VideoList(videos, handleVideoSelect)}
            </div>
        )
    }
}

export default VideoList;