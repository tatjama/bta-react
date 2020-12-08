import React from 'react';

const SelectTypeOfProvider = (props) =>{
   //console.log(props)   
   
    return(
        <select 
            name = {props.name} 
            id = {props.name} 
            onChange={props.handleChange} 
            autoFocus = {props.autoFocus} 
            className = "select-provider"
        >       
                        {props.optionArray.map((option) =>{
    return(
        <option 
            value = {option} 
            key = {option} 
            id = {option}>
                {option}
        </option>
    )
   })}
                        
        </select>
    )
}

export default SelectTypeOfProvider;