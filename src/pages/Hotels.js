import React from 'react';

const Hotels = (props) =>{
    return(
        <div>
                    {console.log(props.hotels)}
                    {props.hotels.map((item) => {
                  return(                      
                      <div key = {item.result_object.location_id}>
                                                    
                          <h1>Name: {item.result_object.name}</h1>
                          <img src = {item.result_object.photo.images.small.url} alt = {item.result_object.name}/>
                          <h2>Address: {item.result_object.address}</h2>
                          <h2>ID: {item.result_object.location_id}</h2>
                          <h2>Category: {item.result_object.category.name}</h2>
                          <h2>Rating: {item.result_object.rating}</h2>
                          <h2>Review snippet: {item.review_snippet.snippet}</h2>
                          <span>Type: {item.result_type}</span>                        
                      </div>
                  )
              })}
                </div>
    )
}

export default Hotels;