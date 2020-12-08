import React from 'react';

const Attractions  = (props) =>{
    return(
        <div>
        {console.log(props.attractions)}
        {
            props.attractions.map((attraction) => {
                return(
                    <div key = {attraction.result_object.location_id}>
                        <h1>Name: {attraction.result_object.name}</h1>
                        <img 
                            src = {attraction.result_object.photo.images.small.url} 
                            alt = {attraction.result_object.name}
                        />                          
                        <h2>Address: {attraction.result_object.address}</h2>                          
                        <h2>ID: {attraction.result_object.location_id}</h2>
                        <h2>Category: {attraction.result_object.category.name}</h2>
                        <h2>Rating: {attraction.result_object.rating}</h2>
                        <h2>Review snippet: {attraction.review_snippet.snippet}</h2>
                        <span>Type: {attraction.result_type}</span>
                    </div>
                )
            })
        }
        
    </div>

    )
}

export default Attractions;