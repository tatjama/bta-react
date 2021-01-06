import React from 'react';

const CityInfo = (props) =>{
    return(
        <div>  
            City:  
            <h1 className = "main-header">{props.header.name} </h1>                 
            <div className = "main-div">                              
                 <div className="data-selected__data-info">
                    <div className="data-selected_left ">
                        <h2>INFO</h2>
                        <p className = "data-selected__p">CITY NAME:<span className = "data-selected__span">{props.header.name}</span></p>
                        <p className = "data-selected__p">TIME ZONE: <span className = "data-selected__span">{props.header.timezone}</span></p>
                        <p className = "data-selected__p">LONGITUDE: <span className = "data-selected__span">{props.header.longitude}</span></p>
                        <p className = "data-selected__p">LATITUDE: <span className = "data-selected__span">{props.header.latitude}</span></p>
                        <p className = "data-selected__p">ID: <span className = "data-selected__span">{props.header.location_id}</span></p>                                                                
                    </div>
                    <div className="data-selected_right ">
                    <h2>DESCRIPTION</h2>
                        {props.header.geo_description?
                         <p className = "data-selected__p"><span className = "data-selected__span">{props.header.geo_description}</span></p> 
                         : <p className = "data-selected__p"><span className = "data-selected__span">Description is not available</span></p>           
                        }
                        
                    </div>
                </div>  
            </div>             
        </div>
    )
}

export default CityInfo;

