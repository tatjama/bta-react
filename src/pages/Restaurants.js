import React, {useState} from 'react';
import avatarImage from '../images/travel-and-tourism.png';
import Button from '../components/Button';
import CommentFromUsers from '../components/CommentFromUsers';
import useFetchComments from '../hooks/useFetchComments';
import LeaveCommentForm from '../components/LeaveCommentForm';
import createCommentArray from '../components/utils/createCommentsArray';
import Loader from 'react-loader-spinner';


const Restaurants = (props) => {     

    const [isCommentForm, setIsCommentForm] = useState(false);
    const [locationCommentId, setLocationCommentId] = useState(null);
    const [isShowComments, setIsShowComments] = useState(false)
    const [commentFromUser, setCommentFromUser] = useState({});    
    const [commentsFromLocalStorageAndFetchComments, setCommentsFromLocalStorageAndFetchComments] = useState([])
    
    const { query, comments, fetchComments, isLoading, isError} = useFetchComments(submitted);

    async function submitted(){      
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
        <div className = "restaurants">   
            <h1 className = "main-header">RESTAURANTS </h1>
            <div className = "main-div" id = "restaurants">
                {props.restaurants.map((restaurant) =>{
                    return(
                        <div key = {restaurant.location_id} className = "data-selected">                             
                            <h1>{restaurant.name}</h1>
                            <h2>Rating: {restaurant.rating}</h2>                            
                                <div className = "data-info">
                                    <div className = "data-left">
                                    {restaurant.photo.images.small.url?
                                        <img 
                                            src = {restaurant.photo.images.small.url} 
                                            alt = {restaurant.name}
                                            style= {{maxWidth: "230px"}}
                                        />:
                                        <img
                                            src = {avatarImage}
                                            alt = "generic"
                                            style = {{ height: "150px"}}
                                        />
                                    }
                                    </div>
                                    <div className = "data-right">
                                        <h3>DESCRIPTION</h3>
                                        {restaurant.description?
                                        <p><span>{restaurant.description}</span></p> 
                                        : <p><span>Description is not available</span></p>           
                                        }
                                    </div>                                    
                                    <hr style={{"border":"3px solid #f1f1f1 "}}/> 
                                </div>
                                <div className = "data-info">
                                    <div className = "data-restaurant">
                                        <h3>CONTACT</h3>
                                            <p>Name: <span>{restaurant.name}</span></p>
                                            <p>Address: <span>{restaurant.address}</span></p>
                                            <p>Phone: <span>{restaurant.phone}</span></p>
                                            <p>Email: <span>{restaurant.email}</span></p>
                                            <p>Website: <span>{restaurant.website}</span></p>
                                            
                                            
                                    </div>
                                    <div className = "data-restaurant"> 
                                        <h3>INFO</h3>                                                   
                                            <p>Type: <span>Restaurant</span></p>   
                                            <p>LONGITUDE: <span>{restaurant.longitude}</span></p>
                                            <p>LATITUDE: <span>{restaurant.latitude}</span></p>
                                            <p>ID: <span>{restaurant.location_id}</span></p>
                                    </div>
                                    <div className = "data-restaurant">
                                        <h3>RATING</h3>
                                        <p>Rating: <span>{restaurant.rating}</span></p>
                                        <p>Ranking: <span>{restaurant.ranking}</span></p>                                                                   
                                        <p>Category: <span>{restaurant.ranking_category}</span></p>
                                        <p>Ranking position: <span>{restaurant.ranking_position}</span></p>                                           
                                        <p>Price: <span>{restaurant.price}</span></p>    

                                    </div>
                                </div>                               
                                       
                            <div>
                            <Button 
                                id = {restaurant.location_id}
                                className = "comment-button"
                                name = "See Comments"
                                handleOnClick = {() => fetchComments(restaurant.location_id)}
                            />
                            <Button 
                                className = "comment-button"
                                name = "Close Comments"
                                handleOnClick = {closeComments}
                            />
                            <Button
                                    className = "comment-button"
                                    name = "Leave a Comment"
                                    handleOnClick = {() => 
                                        openCommentForm(restaurant
                                            )}
                                />
                                {locationCommentId === restaurant.location_id && 
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
                                (query === restaurant.location_id) 
                                && isShowComments
                                &&
                            <div className = {restaurant.location_id}>
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


export default Restaurants;
