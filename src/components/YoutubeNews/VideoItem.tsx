import React from 'react';
import './style/video.css';

interface IProps {
    // video_item:any;
    video: any;
    handleVideoSelect: any
}

class VideoItem extends React.Component<IProps, any>{

    render() {
        var video: any = this.props.video;
        var handleVideoSelect: any = this.props.handleVideoSelect;
        const VideoItem = (video: any, handleVideoSelect: any) => {
            return (
                <div onClick={() => handleVideoSelect(video)} className=' video-item item'>
                    <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
                    <div className='content'>
                        <div className='header '>{video.snippet.title}</div>
                    </div>
                </div>
            )
        };
        return (
            <div>
                {VideoItem(video, handleVideoSelect)}
            </div>
        )
    }
}
export default VideoItem;