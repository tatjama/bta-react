import React from 'react';
import Comment from './Comment';

const CommentsForm = (props) => {  
    const comments = props.arrayComments;
         return(
            <div className = "comments-form">
            <form>
                <h2>Show Comments:</h2>
           {comments.map((comment) => 
               <Comment
               id = {comment.id}
               source = {comment.source}
               userName  = {comment.userName}
               date = {comment.date}
               commentTitle = {comment.commentTitle}
               commentText = {comment.commentText}
               key = {comment.id}
               />           
           )
           } 
            <button  >Delete comment</button>
        </form>
    </div>
        )
    }  

export default CommentsForm;