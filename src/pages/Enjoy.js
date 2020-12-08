import React from 'react';
import logoAirplane from '../images/logoavio1.png';
//import avatar from '../images/traveler.png';
import TransportationForm from '../components/TransportationForm';
import ProviderHeading from '../components/ProviderHeading';
import ProviderDetail from '../components/ProviderDetail';
//import Comment from '../components/Comment';
import avatarDragan from '../images/avatar-dragan.png';
import avatarJelena from '../images/avatar-jelena.png';
import avatarIvana from '../images/avatar-ivana.jpg';
import CommentsForm from '../components/CommentsForm';
import {useAppContext} from '../libs/contextLib';

const Enjoy = () =>{
    const { isUserAuthenticated} = useAppContext();      
    console.log( isUserAuthenticated)
    
    return(
        <div className="page-enjoy">
            <header className="header" id="header-enjoy" >
                <div id="message"></div>
                <h1 id="nCity">Country-City</h1>
            </header>
        
            <div className="wrapper">
               <TransportationForm/>
                <div id="showTransportation">
            <h1>City FROM: Belgrade - City TO: Budapest</h1>
            <button>Life in...</button>
            <div className="middle-wrapper">
                <h2> Airplane</h2>
                <div className="provider-div">

                    <ProviderHeading/>
                    <div className="show-provider-detail" id="showProviderDetail" >
                        <hr style={{border:"3px solid #f1f1f1"}}/>

                        <ProviderDetail/>
                    </div>
                    <div className="showProviderFeedback" id="showProviderFeedback" >
                        <hr style={{border:"3px solid #f1f1f1"}}/>
                        <div className="providerFeedback">
                            <div>
                                <h2>User rating </h2>
                                
                            </div>   
                            <div id="showComments">
                                <CommentsForm arrayComments = {comments}/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
            </div>
        </div>
    )
}

const comments = [
    {
        id : "comment-5-1",
                                        source : avatarDragan,
                                        userName : "Dragan Petrovic",
                                        date : "05.06.2020",
                                        commentTitle : "You have little time to arrive from one flight to another",
                                        commentText : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iver"
              },{
                        id : "comment-5-2",
                                        source : avatarJelena,
                                        userName : "Jelena",
                                        date : "08.08.2020",
                                        commentTitle : "Fastest way to arrive in ...",
                                        commentText : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
              },{ 
                            
                                         id: "comment-5-3",
                                         source : avatarIvana,
                                         userName : "Ivana",
                                         date : "08.10.2020",
                                         commentTitle : "Flight was late",
                                         commentText : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
         
    }
]
/*const comments = 
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
*/

export default Enjoy;