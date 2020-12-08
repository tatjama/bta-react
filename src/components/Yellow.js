import React from 'react';

const Yellow = () =>{

    function addInformation() {
        alert('add information')
    }
    function clearSelection() {
        alert("clear selection")
    }
    return(
        <form style={{ backgroundColor: "yellow", display: "none"}} className="yellow" id="formComment" >
                                <fieldset>
                                    <legend>Comment</legend>
                                    Choose category:
                                    <br/>
                                    <br/> <span>Local transport    </span>
                                    <input type="radio" name="category" id="transport" />
                                    <br/>
                                    <span>Food & Entertainment</span>
                                    <input type="radio" name="category" id="food"/>
                                    <br/> <span>Safety    </span>
                                    <input type="radio" name="category" id="safety"/>
                                    <br/>
                                    <span>Local culture</span>
                                    <input type="radio" name="category" id="localCulture"/>
                                    <br/><span>Airport</span>
                                    <input type="radio" name="category" id="airport"/>
                                    <br/>Add your comment:
                                    <br/>
                                    <br/>
                                    <textarea cols="60" rows="10" name="information" 
                                    id="informationLife" 
                                    placeholder="Write some information about life in the city"
                                    ></textarea>
                                    <br/>
                                    <button className="choose-destination-button">Choose destination</button>
                                    <button type="button"  onClick={addInformation}>Comment</button>
                                    <button type="reset" onClick={clearSelection}>Clear</button>
                                </fieldset>
                            </form>
    )
}

export default Yellow;