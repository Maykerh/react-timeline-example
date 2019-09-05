import React, { Component } from 'react';
import './styles/Comment.css';

export default props => {
    return (
        <div className="comment-container">
            <div className="comment-image">
                <img src={props.data.image} width={35} height={35} />
            </div>
            <div className="comment-text-box">
                <div className="comment-text">
                    <span className="comment-username">{props.data.user}</span>
                    {props.data.text}
                </div>
            </div>
        </div>
    );
};
