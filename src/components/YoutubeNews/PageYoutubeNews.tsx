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
    handleSubmit = async (termFromSearchBar:any) => {
        let response:any = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyAAji08D-qvQDAreTvqrv7pz_UHOJFz2gA',
                q: termFromSearchBar
            }
        })
        console.log(response)
        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    // handleVideoSelect = (video) => {
    //     this.setState({selectedVideo: video})
    // }

    

    // handleVideoSelect = (video: any) => {
    //     this.setState({ selectedVideo: video })
    // }

    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                {/* <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div> */}
            </div>
            
        )
    }
}

export default PageYoutubeNews;