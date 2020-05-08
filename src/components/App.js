import React, { Component } from 'react';

import youtube from '../API/youtube';
import Navbar from './Navbar/Navbar';
import Searchbar from './Searchbar/Searchbar';
import VideoList from './VideoList/VideoList';

class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    };

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
        this.setState({ videos: response.data.items });
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
                    <VideoList
                        videos={this.state.videos}
                        onVideoSelect={this.onVideoSelect}
                    />
                </div>
            </div>
        );
    }
}

export default App;