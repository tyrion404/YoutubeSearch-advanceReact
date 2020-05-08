import React, { Component } from 'react';
import VideoItem from './VideoItem/VideoItem';

class VideoList extends Component {
    render() {
        const renderedList = this.props.videos.map((video) => {
            return (
                <VideoItem
                    onVideoSelect={this.props.onVideoSelect}
                    key={video.id.videoId}
                    video={video}
                />);
        });
        return (
            <div className="sixteen wide mobile sixteen wide tablet six wide computer column">
                <div className="ui relaxed divided list">
                    {renderedList}
                </div>
            </div>
        );
    }
}

export default VideoList;