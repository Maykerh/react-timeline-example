import React, { Component } from 'react';
import './styles/Post.css';

import Comment from './Comment.jsx';

export default ({ user, date, text, image, comments }) => {
    console.log(comments);
    return (
        <div className="post-container">
            <div className="post-info">
                <img src={image} width={45} height={45} />
                <div className="post-info-texts">
                    <span className="post-username">{user}</span>
                    <span className="post-date">{date}</span>
                </div>
            </div>

            <div className="post-text">{text}</div>

            <div className="post-end-line"></div>

            <div className="comments-container">
                {comments && comments.map(comment => <Comment data={comment} />)}
            </div>
        </div>
    );
};
