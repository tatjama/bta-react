import React, {useState, useEffect} from 'react';
import adminAvatar from '../images/avatar-ivana.jpg';
import userAvatar from '../images/avatar-dragan.png';
import tAdminAvatar from '../images/avatar-jelena.png';
import appAvatar from '../images/travel-and-tourism.png';
import Rating from './Rating';
import Range from './Range';
import validateCommentForm from '../components/utils/validateCommentForm';
import useForm from '../hooks/useForm';
import { useAppContext } from '../libs/contextLib';

const initialValues = {    
        travel_date: "",
        rating: "",
        text: "",
        title: ""    
}

const LeaveCommentForm = (props) =>{
    const {isUserAuthenticated} = useAppContext();
    const [avatar, setAvatar] = useState(appAvatar);

    useEffect(() => {       
       switch (isUserAuthenticated.logInUser.firstName) {
           case "Admin": setAvatar(adminAvatar)
               break;
            case "User": setAvatar(userAvatar)
                break;
            case "Tanja": setAvatar(tAdminAvatar)
                break;              
           default:  setAvatar(appAvatar)
               break;
       }
    }, [isUserAuthenticated.logInUser.firstName])
    
    const {values, errors, handleChange, handleSubmit, handleReset} 
    = useForm(submitted, validateCommentForm, initialValues)
    
     function submitted(){
        const d = new Date();
        const newId = Math.floor((Math.random()*100000000000) + 10000000)  + "user"
        const newValues = {...values, published_date: d, id: newId,  feedback: "new",
                            user: {username: isUserAuthenticated.logInUser.firstName,
                                    avatar: {small: {url: avatar}}},
                         }
        const newCommentValues = {
            comment:newValues,
            result_object:{
                location_id: props.info.location_id
            }
                                    }
        alert("Thank you. Your comment is submitted")
        let commentsArray = []
        commentsArray =JSON.parse(localStorage.getItem('commentsArray')) || []
         commentsArray.push(newCommentValues)   
         localStorage.setItem('commentsArray', JSON.stringify(commentsArray))
         props.handleOnClick()
    } 
    
    return(
        <div className="user-comment">   
        <p></p>         
            <form id = "leave-comment-form" onSubmit = {handleSubmit} noValidate>
                <div className = "leave-comment-header">
                 <div className = "provider">                     
                     <img 
                        className = "provider-logo" 
                        src = {props.info.photo.images.small.url || props.logo}
                        alt = {props.info.name}
                    />                    
                    
                         <h2>Add feedback about <br/> {props.info.name}</h2>
                         <p>Location ID: {props.info.location_id}</p>
                         <p>Type: {props.info.category.name}</p>
                            <div>
                                <Rating rate = {props.info.rating}/>
                                 <p>{props.info.rating} average based on {props.info.num_reviews} reviews.</p>    
                            </div>                     
                 </div>

                 <div className = "leave-comment-user">
                     <img 
                        className = "avatar" 
                        src = {avatar} 
                        alt = {isUserAuthenticated.logInUser.firstName}
                    />
                 <p>Author:
                     <br/><span>{isUserAuthenticated.logInUser.firstName + " " + isUserAuthenticated.logInUser.lastName}</span></p>
               
                </div>
                </div>
                Travel date:
                <input 
                    type = "date" 
                    name = "travel_date"
                    onChange = {handleChange}
                    value = {values.travel_date}
                    className = {`${errors.travel_date && 'inputError'}`}
                    required = {true}
                    autoFocus
                />
                {errors.travel_date && <p className = "error-message-comment">{errors.travel_date}</p>}
                Header:
                <br/>
                <textarea  
                    rows="2" 
                    name = "title" 
                    id="comment-header" 
                    placeholder="Try to describe your range"
                    onChange = {handleChange}
                    value = {values.title}
                    className = {`${errors.title && 'inputError'}`}
                    required = {true}
                >                    
                </textarea> 
                {errors.title && <p className = "error-message-comment">{errors.title}</p>}
                <br/> 
                Comment:
                <br/>
                <textarea  
                    rows="10" 
                    name = "text" 
                    placeholder="Place for your comment..."
                    onChange = {handleChange}
                    value = {values.text}
                    className = {`${errors.text && 'inputError'}`}
                    required = {true}
                >
                </textarea>
                {errors.text && <p className = "error-message-comment">{errors.text}</p>}
                <br/>
                <p className = "message-range">Click for range</p>
                <Range handleChange = {handleChange} errors = {errors}/>
        {errors.rating && <p className = "error-message-comment">{errors.rating}</p>}
                <br/>
                <button className = "comment-button" type="submit">Submit</button>
                <button className = "comment-button" onClick = {handleReset}>Reset</button>
                <button className = "comment-button" onClick ={props.handleOnClick}>Close</button>    
            </form>
        </div>
    )
}

export default LeaveCommentForm;