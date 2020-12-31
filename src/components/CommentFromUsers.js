import React from 'react';
import Button from './Button';
import Rating from './Rating';
import {useAppContext} from '../libs/contextLib';

const CommentFromUsers = (props) =>{
    const { isUserAuthenticated} = useAppContext();   

    const deleteComment = (id) => {
        if(window.confirm(`Do you want to delete ${id} comment?`))
                    {const commentsArray = JSON.parse(localStorage.getItem('commentsArray'))
                    function findCommentById(comment){
                        return comment.comment.id !== id                        
                    }
                    const comments = commentsArray.filter(findCommentById)
                    localStorage.removeItem('commentsArray');
                    localStorage.setItem('commentsArray', JSON.stringify(comments))
                    alert(`You removed ${id} comment `)
                    }
                    else{alert(`You didn't remove ${id} comment`)} 
    }
    
    return(
        <div className="comment" id= {props.comment.id}>       
        <div className="user">
            <img className="avatar" src = {props.comment.user.avatar.small.url} alt= {props.comment.user.username}/>
            <p>Author: <br/><span>{props.comment.user.username}</span></p>
            <p>Travel date: <span><br/>{props.comment.travel_date}</span></p>
        </div>
        <div className="text-comment">
            <h2> {props.comment.title}</h2>            
            <p>Comment:<span> {props.comment.text}</span></p>
            <br/>
            <p>Published: <span>{props.comment.published_date}</span></p>
        </div>
        <div className = "comment-range">
            <div>
                <span className="heading">User Rating: {props.comment.rating} </span>
                <Rating rate = {parseInt(props.comment.rating)}/>               
            </div>
            <br/><br/>{(props.comment.feedback === "new")
            && ((isUserAuthenticated.logInUser.status === 1) 
                || 
                (isUserAuthenticated.logInUser.firstName === props.comment.user.username ))
            && <Button
                name = "Delete Comment"
                handleOnClick = {() => {deleteComment(props.comment.id)}}
            />}
        </div>
    </div>
    )
}

export default CommentFromUsers;