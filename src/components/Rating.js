import React from 'react';

const Rating = (props) => {
    return(
        <div>
        {(Math.round(props.rate) === 5)? 
            <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            </div>: (Math.round(props.rate) === 4)?
            <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            </div>: (Math.round(props.rate) === 3)?
            <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            </div>: (Math.round(props.rate) === 2)?
            <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star "></span>
            <span className="fa fa-star "></span>
            <span className="fa fa-star"></span>
            </div>: (Math.round(props.rate) === 1)?
            <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            </div>:
            <div>There is no user rating!</div>                
            }
            </div>
   )
}

export default Rating;