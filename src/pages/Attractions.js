import React, {useState} from 'react';
import avatarImage from '../images/travel-and-tourism.png';
import Button from '../components/Button';
import CommentFromUsers from '../components/CommentFromUsers';
import useFetchComments from '../hooks/useFetchComments';
import LeaveCommentForm from '../components/LeaveCommentForm';
import createCommentArray from '../components/utils/createCommentsArray';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Attractions  = (props) =>{
    const [isCommentForm, setIsCommentForm] = useState(false);
    const [isShowComments, setIsShowComments] = useState(false)
    const [locationCommentId, setLocationCommentId] = useState(null);
    const [commentFromUser, setCommentFromUser] = useState({});    
    const [commentsFromLocalStorageAndFetchComments, setCommentsFromLocalStorageAndFetchComments] = useState([])
    
    const {query, comments, fetchComments, isLoading, isError} =  useFetchComments(submitted);
  
    async function submitted (){      
     const commentsArray = createCommentArray(query, comments)
     await setCommentsFromLocalStorageAndFetchComments(commentsArray)
     setIsShowComments(true)
    }
    const closeComments = () => {
        setIsShowComments(false)
    }
    const openCommentForm = (resultObject) => {
      setLocationCommentId(resultObject.location_id);
      setCommentFromUser(resultObject)
      setIsCommentForm(true)
    }

    const closeCommentForm = () =>{
    setIsCommentForm(false)
    }
    return(
        <div className = "attractions">
            <h1 className = "main-header">ATTRACTIONS </h1>
            <div className = "main-div" id = "attractions">
                {props.attractions.map((attraction) => {
                    return(
                        <div key = {attraction.result_object.location_id} className = "data-selected">
                            <h1> {attraction.result_object.name}</h1>
                            <h2 className = "data-selected__h2">Rating: {attraction.result_object.rating}</h2>
                            <div className = "data-selected__data-info">
                                <div className = "data-selected_left">
                                    {attraction.result_object.photo.images.small.url?
                                        <img 
                                            src = {attraction.result_object.photo.images.small.url} 
                                            alt = {attraction.result_object.name}
                                        />:
                                        <img
                                            src = {avatarImage}
                                            alt = "generic"
                                            style = {{ height: "150px"}}
                                        />
                                    }                                           
                                </div>   
                                <div className = "data-selected_right">              
                                    <p className = "data-selected__p">Address: <span className = "data-selected__span">{attraction.result_object.address}</span></p>                          
                                    <p className = "data-selected__p">ID: <span className = "data-selected__span">{attraction.result_object.location_id}</span></p>
                                    <p className = "data-selected__p">Category: <span className = "data-selected__span">{attraction.result_object.category.name}</span></p>                        
                                    <p className = "data-selected__p">Review snippet: <span className = "data-selected__span">{attraction.review_snippet.snippet}</span></p>
                                    <p className = "data-selected__p">Type: <span className = "data-selected__span">{attraction.result_type}</span></p>
                                </div>
                            </div>
                            <div>
                                <Button 
                                    id = {attraction.result_object.location_id}
                                    className = "comment-button"
                                    name = "See Comments"
                                    handleOnClick = {() => fetchComments(attraction.result_object.location_id)}
                                />
                                <Button 
                                    className = "comment-button"
                                    name = "Close Comments"
                                    handleOnClick = {() => closeComments()}
                                />
                                <Button
                                    className = "comment-button"
                                    name = "Leave a Comment"
                                    handleOnClick = {() => 
                                        openCommentForm(attraction.result_object
                                            )}
                                />
                                {locationCommentId === attraction.result_object.location_id && 
                                 isCommentForm &&
                                    <LeaveCommentForm
                                        handleOnClick = {closeCommentForm}
                                        info = {commentFromUser}
                                    />
                                }
                            {isError && <div className = "error">Error. Something went wrong...</div>}
                            {isLoading?
                               <Loader type="Grid" color="#00BFFF" height={40} width={40} />
                                :
                                (query === attraction.result_object.location_id) 
                                && isShowComments
                            && <div className = {attraction.result_object.location_id}>
                             {commentsFromLocalStorageAndFetchComments.map((comment) => {
                                return(
                                    <div key = {comment.id}>
                                        <CommentFromUsers comment = {comment}/>
                                   </div>
                                )
                            })}
                            </div>
                            
                            }
                            
                            </div>
                            <hr style={{"border":"3px solid #f1f1f1 "}}/>   
                        </div>
                     )
                })}
            </div>
        </div>

    )
}

export default Attractions;