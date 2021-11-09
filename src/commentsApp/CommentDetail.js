import React from "react";


export const CommentDetail = ({children, time , comment , avatar}) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={avatar}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {children}
                </a>
                <div className="metadata">
                    <span className="date"> {time}</span>
                </div>
                <div className="text">{comment}</div>
            </div>
        </div>
    )

}