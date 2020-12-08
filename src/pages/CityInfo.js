import React from 'react';

const CityInfo = (props) =>{
    return(
        <div>  
            City:  
            <h1 className = "main-header">{props.header.name} </h1>                 
            <div className = "main-div">                              
                 <div className="data-info">
                    <div className="data-left ">
                        <h2>INFO</h2>
                        <p>CITY NAME:<span>{props.header.name}</span></p>
                        <p>TIME ZONE: <span>{props.header.timezone}</span></p>
                        <p>LONGITUDE: <span>{props.header.longitude}</span></p>
                        <p>LATITUDE: <span>{props.header.latitude}</span></p>
                        <p>ID: <span>{props.header.location_id}</span></p>                                                                
                    </div>
                    <div className="data-right ">
                    <h2>DESCRIPTION</h2>
                        {props.header.geo_description?
                         <p><span>{props.header.geo_description}</span></p> 
                         : <p><span>Description is not available</span></p>           
                        }
                        
                    </div>
                </div>  
            </div>             
        </div>
    )
}

export default CityInfo;

