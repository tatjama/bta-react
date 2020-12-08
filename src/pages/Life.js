import React from "react";
import SelectForm from "../components/SelectForm";
import GeneralInformation from "../components/GeneralInformation";
import SectionFirst from "../components/SectionFirst";
import avatar from '../images/traveler.webp';
import avatarMarko from '../images/avatar-marko.webp';
import avatarJelena from '../images/avatar-jelena.webp';
import avatarLuka from '../images/avatar-luka.webp';
import avatarStefan from '../images/avatar-stefan.webp';
import avatarPetar from '../images/avatar-petar.webp';
import avatarSanja from '../images/avatar-sanja.jpg';
import avatarIvana from '../images/avatar-ivana.jpg';
import avatarDragan from '../images/avatar-dragan.webp';
import airSerbiaLogo from '../images/logoavio1.webp';
import {useAppContext} from '../libs/contextLib';

function showAddComment() {
    document.getElementById('user-comment').style.display = "block";
}

const Life = ()=>{        
    const { isUserAuthenticated} = useAppContext();      
    console.log( isUserAuthenticated)   

    return(
        <div className="page-life">
             <header className="header" id="header-life" >
                <div id="message"></div>        
                 <SelectForm/>          
            </header>    
            <div className="wrapper">
                <h3>Life in different countries....(Country-City)</h3>
                <SectionFirst/>

                <section className="section-second">
                    <GeneralInformation
                            information = {information[0]}
                            handleOnClick = {showAddComment}  
                            arrayComments = {comments[0]} 
                            source = {airSerbiaLogo}
                    />                    
                    <GeneralInformation 
                            information = {information[1]}
                            handleOnClick = {showAddComment}
                            arrayComments = {comments[1]} 
                            source = {airSerbiaLogo}
                    />                    
                    <GeneralInformation 
                            information = {information[2]}
                            handleOnClick = {showAddComment}
                            arrayComments = {comments[2]} 
                            source = {airSerbiaLogo}
                    />                    
                    <GeneralInformation 
                            information = {information[3]}
                            handleOnClick = {showAddComment}
                            arrayComments = {comments[3]} 
                            source = {airSerbiaLogo}
                    />                     
                    <GeneralInformation
                            information = {information[4]}
                            handleOnClick = {showAddComment}
                            arrayComments = {comments[3]}
                            source = {airSerbiaLogo}                             
                    />
                </section>
            </div>

        </div>
    )
}

export default Life;

const information = [
    {
        id: "transport",
        informationTitle: "Local Transport",
        informationSubtitle: "General Information about Local Transport:",
        li1: "Train",
        li2: "Rent a car",
        li3: "BUS",
        li4: "Taxi",
        buttonId: "show-add-comment-transport"
    },
    {
        id: "food", 
        informationTitle: "Food & Entertainment",
        informationSubtitle: "General Information about Local Food & Entertainment:",
        li1: "Restaurants",
        li2: "Fast food",
        li3: "Cafe",
        li4: "Clubs",
        buttonId: "show-add-comment-food"
    },
    {
        id: "safety", 
        informationTitle: "Local safety",
        informationSubtitle: "General Information about Local Safety:",
        li1: "Regulations",
        li2: "Police",
        li3: "Hospitals",
        li4: "Hospitality",
        buttonId: "show-add-comment-safety"
    },
    {
        id: "culture", 
        informationTitle: "Local Culture",
        informationSubtitle: "General Information about Local Culture:",
        li1: "Museums",
        li2: "Opera",
        li3: "Music",
        li4: "Dance",
        buttonId: "show-add-comment-culture"
    },
    {
        id: "airport",
        informationTitle: "Airport",
        informationSubtitle: "General Information about Airport:",
        li1: "Airport1",
        li2: "Airport2",
        li3: "Transport from /to airport",
        buttonId: "show-add-comment-airport"
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
            commentTitle: "I like this city",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
        
        },
        {
            id: "comment-0-2" ,
            source: avatarJelena, 
            userName: " Dusko Dugousko",
            date: "02.02.2019",
            commentTitle: "Airplane is quite old...",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                  
        },
        {
            id: "comment-0-3" ,
            source: avatarMarko,
            userName: " Marko Markovic",
            date: "03.03.2003",
            commentTitle: "About a place",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                   
        }
    ],    
    [
        {
            id: "comment-1-1" ,
            source: avatarJelena, 
            userName: " Jelena Jovanovic",
            date: "01.01.2019",
            commentTitle: "I like Local food",
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
            commentTitle: "Health care is very organised",
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
            commentTitle: "Police station is in the center of city",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                   
        }
    ],
    [
        {
            id: "comment-4-1" ,
            source: avatarIvana, 
            userName: " Ivana Jovanovic",
            date: "10.01.2019",
            commentTitle: "Fantastic show",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
        
        },
        {
            id: "comment-4-2" ,
            source: avatar, 
            userName: " Dragan Jovovic",
            date: "20.02.2020",
            commentTitle: "Theatar is very modern",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                  
        },
        {
            id: "comment-4-3" ,
            source: avatarJelena,
            userName: " Jelena Stefanovic",
            date: "03.07.2020",
            commentTitle: "National museum have extensive collection",
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                   
        }
    ]    
    

]
