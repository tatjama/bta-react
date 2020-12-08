import React from 'react';
import Figure from './Figure';
import hotel from '../images/hotel.webp';
import hostel from '../images/hostel.webp';
import apartment from '../images/apartmant.webp';
import house from '../images/home.webp';
//import airplane from '../images/airplane.webp';


class SectionFirstAccommodation extends React.Component{
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
    const showLocalCulture = () => {
        document.getElementById('transport').style.display = "none";
        document.getElementById('food').style.display = "none";
        document.getElementById('safety').style.display = "none";
        document.getElementById('culture').style.display = "block";
        document.getElementById('airport').style.display = "none";
    }
    this.state = {
        figureList: [
            {
                name: "Hotel", 
                source: hotel, 
                handleOnClick:  showLocalTransport, 
                alt: "Hotel", 
                go:  "#transport"

            },
            {
                name: "Hostel", 
                source: hostel,
                handleOnClick: showFood,
                alt: "Hostel" ,
                go: "#food"
            },
            {
                name: "Apartment", 
                source: apartment, 
                handleOnClick: showSafety,
                alt: "Apartment" ,
                go: "#safety"
            },
            {
                name: "House" ,
                source: house, 
                handleOnClick: showLocalCulture,
                alt: "House" ,
                go: "#culture"
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

export default SectionFirstAccommodation;