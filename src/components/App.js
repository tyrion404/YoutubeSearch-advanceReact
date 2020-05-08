import React, { Component } from 'react';

import youtube from '../API/youtube';
import Navbar from './Navbar/Navbar';
import Searchbar from './Searchbar/Searchbar';
import VideoDetail from './VideoDetail/VideoDetail';
import VideoList from './VideoList/VideoList';

class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onSearchSubmit('');
    }

    onSearchSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                type: 'video',
                part: 'snippet',
                maxResults: 5,
                key: process.env.REACT_APP_YTSearchAPI
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className="ui container">
                    <Searchbar onSubmit={this.onSearchSubmit} />
                    <div className="ui grid">
                        <div className="ui row">
                            <VideoDetail className="responsiveVideoCom" video={this.state.selectedVideo} />
                            <VideoList
                                className="responsiveVideoListCom"
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;