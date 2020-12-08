import React from 'react';

const Select = (props) =>{
   //console.log(props)   
   
    return(
        <select 
            name = {props.name} 
            id = {props.name} 
            onChange={props.handleChange} 
            autoFocus = {props.autoFocus} 
        >       
                        {props.optionArray.map((option) =>{
    return(
        <option 
            value = {option.value? option.value: option.geonameid} 
            key = {option.id? option.id: option.geonameid} 
            id = {option.id? option.id: option.geonameid}>
                {option.name}
        </option>
    )
   })}
                        
        </select>
    )
}

export default Select;