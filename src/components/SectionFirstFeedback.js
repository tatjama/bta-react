import React from 'react';
import Figure from './Figure';
//import astronaut from '../images/astronaut.webp';
import accommodation from '../images/accomodation.webp';
import friends from '../images/friends.webp';
import world from '../images/world.webp';
//import airplane from '../images/airplane.webp';
//

class SectionFirstFeedback extends React.Component{
    constructor(){
        super();
        
    
    const showLocalTransport = () => {
        document.getElementById('transport').style.display = "block";
        document.getElementById('food').style.display = "none";
        document.getElementById('safety').style.display = "none";
        document.getElementById('culture').style.display = "none";
        document.getElementById('airport').style.display = "none";
    }
    const showFood = () => {
        document.getElementById('transport').style.display = "none";
        document.getElementById('food').style.display = "block";
        document.getElementById('safety').style.display = "none";
        document.getElementById('culture').style.display = "none";
        document.getElementById('airport').style.display = "none";
    }
    const showSafety = () => {
        document.getElementById('transport').style.display = "none";
        document.getElementById('food').style.display = "none";
        document.getElementById('safety').style.display = "block";
        document.getElementById('culture').style.display = "none";
        document.getElementById('airport').style.display = "none";
    }
   /* const showLocalCulture = () => {
        document.getElementById('transport').style.display = "none";
        document.getElementById('food').style.display = "none";
        document.getElementById('safety').style.display = "none";
        document.getElementById('culture').style.display = "block";
        document.getElementById('airport').style.display = "none";
    }*/
   /* const showAirport = () => {
        document.getElementById('transport').style.display = "none";
        document.getElementById('food').style.display = "none";
        document.getElementById('safety').style.display = "none";
        document.getElementById('culture').style.display = "none";
        document.getElementById('airport').style.display = "block";
    }*/
    this.state = {
        figureList: [
            {
                name: "Life in ...", 
                source: friends, 
                handleOnClick:  showLocalTransport, 
                alt: "friends hands", 
                go:  "#transport"

            },
            {
                name: "Accommodation", 
                source: accommodation,
                handleOnClick: showFood,
                alt: "Accommodation" ,
                go: "#food"
            },
            {
                name: "Enjoy in travel", 
                source: world, 
                handleOnClick: showSafety,
                alt: "world" ,
                go: "#*safety"
            }
        ]
    }

}
    render(){
        
        return(
            <section className="section-first">
                {this.state.figureList.map((figure) =>{
                    return(
                        <Figure 
                        name = {figure.name}
                        source = {figure.source} 
                        handleOnClick = {figure.handleOnClick} 
                        alt = {figure.alt} 
                        go  = {figure.go}
                        key = {figure.name}
                    />
                    )}
                )}
                    
                    
                </section>

        )
    }
}

export default SectionFirstFeedback;