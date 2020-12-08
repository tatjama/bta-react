import React from 'react';

const RangeDiv = () => {
    return(
        <div>
            <div className = "range">
                                            5 star 
                                            <input type="radio" name="starRange" value="5"/>
                                            <span className="fa fa-star checked" checked></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                        
                                        </div>
                                        <div className="range">
                                            <label>4 star </label>
                                            <input type="radio" name="starRange" value="4"/>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>                                        
                                        </div>
                                        <div className="range">
                                            <span>3 star </span>
                                            <input type="radio" name="starRange" value="3"/>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>                                            
                                        </div>
                                        <div className = "range">
                                            2 star 
                                            <input type="radio" name="starRange" value="2"/>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>                                     
                                        </div>
                                        <div className = "range">
                                            1 star 
                                            <input type="radio" name="starRange" value="1"/>
                                            <span className="fa fa-star checked"></span>    
                                        </div>
        </div>
    )
}

export default RangeDiv;