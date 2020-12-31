import React from 'react';
import Rating from './Rating';

const Range = ({handleChange, errors}) => {
    const rangeArray = [];
    const getRange = () => {
        for(let i = 5; i >=1 ; i--){
            rangeArray.push(
                <div className = "range">
                        <label>{i} star</label> 
                        <input 
                            type="radio" 
                            name="rating" 
                            value= {i}                                                
                            onChange = {handleChange}
                            className = {`${errors.rating && "inputError"}`}
                        />
                        <Rating rate = {i}/>                                       
                    </div>
            )
        }
        return rangeArray
    }
    return(        
            <div>
                    {getRange()}                                    
        </div>       
    )
}

export default Range;