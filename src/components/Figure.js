import React from 'react';

const Figure = (props)=>{
    return(
        <figure>
        <a href={props.go} onClick = {props.handleOnClick}>
          <img src = {props.source}  alt={props.alt}/>
          <figcaption>{props.name}</figcaption>
        </a>
    </figure>
    )
}

export default Figure;