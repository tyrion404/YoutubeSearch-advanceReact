import React, { Component } from 'react';

import './VideoItem.css';

class VideoItem extends Component {
    render() {
        return (
            <div
                onClick={() => this.props.onVideoSelect(this.props.video)}
                className="item VideoItem"
            >
                <img
                    className="ui image"
                    alt={this.props.video.snippet.title}
                    src={this.props.video.snippet.thumbnails.medium.url}
                />
                <div className="content">
                    <div className="header">{this.props.video.snippet.title}</div>
                </div>
            </div>
        );
    }
}

export default VideoItem;