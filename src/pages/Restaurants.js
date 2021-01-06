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
                            <h2 className="data-selected__h2">Rating: {restaurant.rating}</h2>                            
                                <div className = "data-selected__data-info">
                                    <div className = "data-selected_left">
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
                                    <div className = "data-selected_right">
                                        <h3>DESCRIPTION</h3>
                                        {restaurant.description?
                                        <p className = "data-selected__p"><span className = "data-selected__span">{restaurant.description}</span></p> 
                                        : <p className = "data-selected__p"><span className = "data-selected__span">Description is not available</span></p>           
                                        }
                                    </div>                                    
                                    <hr style={{"border":"3px solid #f1f1f1 "}}/> 
                                </div>
                                <div className = "data-selected__data-info">
                                    <div className = "data-selected__data-restaurant">
                                        <h3>CONTACT</h3>
                                            <p className = "data-selected__p">Name: <span className = "data-selected__span">{restaurant.name}</span></p>
                                            <p className = "data-selected__p">Address: <span className = "data-selected__span">{restaurant.address}</span></p>
                                            <p className = "data-selected__p">Phone: <span className = "data-selected__span">{restaurant.phone}</span></p>
                                            <p className = "data-selected__p">Email: <span className = "data-selected__span">{restaurant.email}</span></p>
                                            <p className = "data-selected__p">Website: <span className = "data-selected__span">{restaurant.website}</span></p>
                                            
                                            
                                    </div>
                                    <div className = "data-selected__data-restaurant"> 
                                        <h3>INFO</h3>                                                   
                                            <p className = "data-selected__p">Type: <span className = "data-selected__span">Restaurant</span></p>   
                                            <p className = "data-selected__p">LONGITUDE: <span className = "data-selected__span">{restaurant.longitude}</span></p>
                                            <p className = "data-selected__p">LATITUDE: <span className = "data-selected__span">{restaurant.latitude}</span></p>
                                            <p className = "data-selected__p">ID: <span className = "data-selected__span">{restaurant.location_id}</span></p>
                                    </div>
                                    <div className = "data-selected__data-restaurant">
                                        <h3>RATING</h3>
                                        <p className = "data-selected__p">Rating: <span className = "data-selected__span">{restaurant.rating}</span></p>
                                        <p className = "data-selected__p">Ranking: <span className = "data-selected__span">{restaurant.ranking}</span></p>                                                                   
                                        <p className = "data-selected__p">Category: <span className = "data-selected__span">{restaurant.ranking_category}</span></p>
                                        <p className = "data-selected__p">Ranking position: <span className = "data-selected__span">{restaurant.ranking_position}</span></p>                                           
                                        <p className = "data-selected__p">Price: <span className = "data-selected__span">{restaurant.price}</span></p>    

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
