import React from 'react';
import RangeDiv from './RangeDiv';

const UserComment = (props) =>{
    return(
        <div className="user-comment">            
            <form>
                 <div className = "provider">
                     <img className = "provider-logo" src = {props.source} alt = {props.nameProvider}/>
                         <h2>Add feedback about {props.nameProvider}</h2>
                            <div>
                                                <span className="heading">User Rating</span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star "></span>
                                                <p>4.1 average based on 254 reviews.</p>    
                            </div>
                 </div>
                Header:
                <br/>
                <textarea  rows="1" id="comment-header" placeholder="Try to describe your range"></textarea> 
                <br/> 
                Comment:
                <br/>
                <textarea  rows="10" placeholder="Place for your comment..."></textarea>
                <br/>
                <p className = "message-range">Click for range</p>
                <RangeDiv/>
                <br/>
                <button type="submit">Submit</button>
                <button id="close" onClick ={props.handleOnClick}>Close</button>    
            </form>
        </div>
    )
}

export default UserComment;