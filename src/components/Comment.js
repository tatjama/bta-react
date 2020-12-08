import React from 'react';

const Comment = (props) =>{
    return(
        <div className="comment" id= {props.id}>
        <div className="user">
            <img className="avatar" src = {props.source} alt= {props.userName}/>
            <p>Author: {props.userName}</p>
            <p>Date: {props.date}</p>
        </div>
        <div className="text-comment">
            <h2> {props.commentTitle}</h2>
            <p>Comment: {props.commentText}
            </p>
        </div>
        <div className="range">
            <div>
                <span className="heading">User Rating</span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
            </div>
            <br/><br/>
            <input type="checkbox"/> 
            <span>Choose comment</span>
        </div>
    </div>
    )
}

export default Comment;