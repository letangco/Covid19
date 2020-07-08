import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../../api/YoutubeNews/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetails';

interface IState{
    videos:any,
    selectedVideo: any
}
class PageYoutubeNews extends React.Component <any, IState> {
    constructor(props:any)
    {
        super(props);
        this.state={
            videos: [],
            selectedVideo: null
        }
    }
  
    handleSubmit = async (termFromSearchBar:any) => {
        let response:any = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 1,
                key: 'AIzaSyBqqdiP7gxBFVf69_gmlJKlKv2RtBTCV1A',
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
        // console.log("this is resp",response);
    };
    handleVideoSelect = (video:any) => {
        this.setState({selectedVideo: video})
    }
    render() {
        console.log(this.state.videos)
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
        
        )
    }
}

export default PageYoutubeNews;