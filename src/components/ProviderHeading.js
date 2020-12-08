import React from 'react';
import Rating from './Rating';

const ProviderHeading = (props) =>{
   
    return(
        <div className="provider-heading ">
            <div className="left">
                <img className="provider-logo " src={props.logo} alt = {props.info.name}/>
                
            </div>
            <div className="right">
                <p>Provider name:<span> {props.info.name}</span></p>                                    
                <p>Type: <span>{props.info.type}</span></p>
                <br/>
                <Rating
                    rate = {props.info.rating}
                />
                <p>{props.info.rating} average based on {props.info.num_review} reviews.</p>
                
            </div>
            
        </div>
    )
}

export default ProviderHeading;