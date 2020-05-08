import React, { Component } from 'react';
import VideoItem from './VideoItem/VideoItem';

class VideoList extends Component {
    render() {
        const renderedList = this.props.videos.map((video) => {
            return (<VideoItem
                onVideoSelect={this.props.onVideoSelect}
                key={video.id.videoId}
                video={video}
            />);
        });
        return (
            <div className="ui relaxed divided list">
                {renderedList}
            </div>
        );
    }
}

export default VideoList;