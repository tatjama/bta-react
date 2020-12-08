import React from 'react';

const CityInfo = (props) =>{
    return(
        <div>
            <h1>City: {props.header.name}</h1> 
             <h2>LONGITUDE: {props.header.longitude}</h2>
             <h2>LATITUDE: {props.header.latitude}</h2>
             <h2>ID: {props.header.location_id}</h2>   
             <h2>DESCRIPTION: {props.header.geo_description}</h2>
             {/**
             * <p>Restaurants: {header.category_counts.restaurants.total}</p>
            <p><ul>Accommodations
                <li>Hotels: {header.category_counts.accommodations.hotels}</li>
                <li>BBS Inns: {header.category_counts.accommodations.bbs_inns}</li>
                <li>Others: {header.category_counts.accommodations.others}</li>
                Total: {header.category_counts.accommodations.total}
            </ul></p>
    <p><ul>Attractions: Total {header.category_counts.attractions.total}
                <li>Activities: {header.category_counts.attractions.activities}</li>
                <li>Attractions: {header.category_counts.attractions.attractions}</li>
                <li>Shopping: {header.category_counts.attractions.shopping}</li>
                <li>Nightlife: {header.category_counts.attractions.nightlife}</li>
    </ul></p>
             */} 
        </div>
    )
}

export default CityInfo;