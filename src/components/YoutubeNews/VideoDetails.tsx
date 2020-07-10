import React from "react";
interface Iprops{
  video:any
}
class VideoDetail extends React.Component <Iprops,any>{
  
  render(){
    var video:any =this.props.video;
    const VideoDetail1 = (video:any) => {
      if (!video) {
        return <div>
           <h1>Enter search keyword to load...</h1>
           <br></br>
           <p style={{fontSize:'25px'}}>
           Use the API to search for videos matching specific search terms, topics, locations, publication dates, and much more. The APIs search.list method also supports searches for playlists and channels.
    
           With the YouTube Data API, you can add a variety of YouTube features to your application. Use the API to upload videos, manage playlists and subscriptions, update channel settings, and more.        
    
           </p>
        </div>
      }
      const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" width="100%" height="450px"/>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
    };
     return(
      <div>
        {VideoDetail1(video)}
      </div>
     )
  }
}

export default VideoDetail;
