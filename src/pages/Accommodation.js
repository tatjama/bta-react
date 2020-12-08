import React from "react";
import SelectForm from "../components/SelectForm";
import GeneralInformation from "../components/GeneralInformation";
import SectionFirstAccommodation from "../components/SectionFirstAccommodation";
import avatar from '../images/traveler.webp';
import avatarMarko from '../images/avatar-marko.webp';
import avatarJelena from '../images/avatar-jelena.webp';
import avatarLuka from '../images/avatar-luka.webp';
import avatarStefan from '../images/avatar-stefan.webp';
import avatarPetar from '../images/avatar-petar.webp';
import avatarSanja from '../images/avatar-sanja.jpg';
import avatarIvana from '../images/avatar-ivana.jpg';
import avatarDragan from '../images/avatar-dragan.webp';
import accommodationLogo from '../images/accomodation_logo.webp';
import {useAppContext} from '../libs/contextLib';

function showAddComment() {
    document.getElementById('user-comment').style.display = "block";
}


const Accommodation = () =>{
    const { isUserAuthenticated} = useAppContext();      
    console.log( isUserAuthenticated)
    
    return(
        <div className="page-accommodation">
             <header className="header" id="header-accommodation" >
                <div id="message"></div>        
                 <SelectForm/>          
            </header>    
            <div className="wrapper">
                <h3>Accommodation....(Country-City)</h3>
                <SectionFirstAccommodation/>

                <section className="section-second">
                    <GeneralInformation
                            information = {information[0]}
                            handleOnClick = {showAddComment}  
                            arrayComments = {comments[0]} 
                            source = {accommodationLogo}
                    />                    
                    <GeneralInformation 
                            information = {information[1]}
                            handleOnClick = {showAddComment}
                            arrayComments = {comments[1]} 
                            source = {accommodationLogo}
                    />                    
                    <GeneralInformation 
                            information = {information[2]}
                            handleOnClick = {showAddComment}
                            arrayComments = {comments[2]}
                            source = {accommodationLogo} 
                    />                    
                    <GeneralInformation 
                            information = {information[3]}
                            handleOnClick = {showAddComment}
                            arrayComments = {comments[3]} 
                            source = {accommodationLogo}
                    />                     
                   
                </section>
            </div>

        </div>
    )
}

export default Accommodation;

const information = [
    {
        id: "hotel",
        informationTitle: "Hotels",
        informationSubtitle: "General Information about Hotels:",
        li1: "Stars",
        li2: "Quality",
        li3: "Location",
        li4: "Local transport",
        buttonId: "show-add-comment-hotel"
    },
    {
        id: "hostel", 
        informationTitle: "Hostels",
        informationSubtitle: "General Information about Hostels:",
        li1: "Stars",
        li2: "Quality",
        li3: "Location",
        li4: "Local transport",
        buttonId: "show-add-comment-hostels"
    },
    {
        id: "apartment", 
        informationTitle: "Apartments",
        informationSubtitle: "General Information about Local Apartments:",
        li1: "Stars",
        li2: "Quality",
        li3: "Location",
        li4: "Local transport",
        buttonId: "show-add-comment-apartments"
    },
    {
        id: "house", 
        informationTitle: "Houses",
        informationSubtitle: "General Information about Local Houses:",
        li1: "Stars",
        li2: "Quality",
        li3: "Location",
        li4: "Local transport",
        buttonId: "show-add-comment-houses"
    }
] 
const comments = 
[
    [
        {
            id: "comment-0-1" ,
            source: avatarPetar, 
            userName: " Pera Peric",
            date: "01.01.2013",
            commentTitle: "I like this hotel",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
        
        },
        {
            id: "comment-0-2" ,
            source: avatarJelena, 
            userName: " Dusko Dugousko",
            date: "02.02.2019",
            commentTitle: "Restaurant in hotel is quite old...",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                  
        },
        {
            id: "comment-0-3" ,
            source: avatarMarko,
            userName: " Marko Markovic",
            date: "03.03.2003",
            commentTitle: "Location is exelent",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                   
        }
    ],    
    [
        {
            id: "comment-1-1" ,
            source: avatarJelena, 
            userName: " Jelena Jovanovic",
            date: "01.01.2019",
            commentTitle: "I like their breakfast food",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
        
        },
        {
            id: "comment-1-2" ,
            source: avatarLuka, 
            userName: " Luka Jovovic",
            date: "02.02.2020",
            commentTitle: "This restaurant is not clean",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                  
        },
        {
            id: "comment-1-3" ,
            source: avatarStefan,
            userName: " Stefan Stefanovic",
            date: "03.03.2020",
            commentTitle: "They have the best cakes in the world",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                   
        }
    ],
    [
        {
            id: "comment-2-1" ,
            source: avatarSanja, 
            userName: " Sanja Jovanovic",
            date: "10.01.2019",
            commentTitle: "Arrival is very organised",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
        
        },
        {
            id: "comment-2-2" ,
            source: avatarDragan, 
            userName: " Dragan Jovovic",
            date: "20.02.2020",
            commentTitle: "Very calm and safe place",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                  
        },
        {
            id: "comment-2-3" ,
            source: avatarIvana,
            userName: " Ivana Stefanovic",
            date: "03.07.2020",
            commentTitle: "Apartment is in the center of city",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                   
        }
    ],
    [
        {
            id: "comment-4-1" ,
            source: avatarIvana, 
            userName: " Ivana Jovanovic",
            date: "10.01.2019",
            commentTitle: "Fantastic house",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
        
        },
        {
            id: "comment-4-2" ,
            source: avatar, 
            userName: " Dragan Jovovic",
            date: "20.02.2020",
            commentTitle: "Furniture is very modern",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                  
        },
        {
            id: "comment-4-3" ,
            source: avatarJelena,
            userName: " Jelena Stefanovic",
            date: "03.07.2020",
            commentTitle: "Very clean place",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                   
        }
    ]    
    

]
