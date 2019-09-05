import React, { Component } from 'react';
import './styles/Timeline.css';

import Post from './Post.jsx';

class Timeline extends Component {
    renderPosts() {
        var { posts } = this.props;

        return posts.map(post => {
            return (
                <Post
                    user={post.user}
                    date={post.date}
                    text={post.text}
                    image={post.image}
                    comments={post.comments}
                />
            );
        });
    }

    render() {
        return <div className="timeline-container">{this.renderPosts()}</div>;
    }
}

export default Timeline;
