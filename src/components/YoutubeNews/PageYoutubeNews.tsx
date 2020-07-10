import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../../api/YoutubeNews/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetails';
class PageYoutubeNews extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    async componentDidMount()
    {
        let  response: any = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 1,
                key: 'AIzaSyBqqdiP7gxBFVf69_gmlJKlKv2RtBTCV1A',
                q: "covid"
            }
        })
        this.setState({
            videos: response.data.items,
        })
    }
    handleSubmit = async (termFromSearchBar: any) => {
        let response: any = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 1,
                key: 'AIzaSyBqqdiP7gxBFVf69_gmlJKlKv2RtBTCV1A',
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items,
        })
    };
    handleVideoSelect = (video: any) => {
        this.setState({ selectedVideo: video })
    }
    render() {
        return (
            <div className='ui container' style={{ marginTop: '1em' }}>
                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <SearchBar handleFormSubmit={this.handleSubmit} />
                </div>
                
                <div className='ui grid'>
                    <div className="ui row">
                        
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageYoutubeNews;