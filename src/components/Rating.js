import React from 'react';

const Rating = (props) => {
    const getStars = () => {
        const stars = [];
        const rating = Math.round(props.rate);
        for( let i = 1; i <= 5; i++){
            if( i <= rating ){
                stars.push(<span key = {i} className="fa fa-star checked"></span>)
            }else{
                stars.push(<span  key = {i} className="fa fa-star "></span>)
            }
        }
        return stars
    }

    return(
        <div>
        {getStars()}
            </div>
   )
}

export default Rating;