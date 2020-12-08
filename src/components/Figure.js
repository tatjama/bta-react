import React from 'react';

const Figure = (props)=>{
    return(
        <figure href={props.go} onClick = {props.handleOnClick}>        
          <img src = {props.source}  alt={props.alt}/>
          <figcaption>{props.name}</figcaption>        
    </figure>
    )
}

export default Figure;