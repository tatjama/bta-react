import React, {useState} from 'react';
import Button from '../components/Button';

const Restaurants = (props) => {
    const [comments, setComments] = useState([])
    const [id, setId] = useState(null)
    console.log(props.restaurants.location_id)
    const fetchRestaurantComments = async () => {
        setId(props.restaurants.location_id)
        console.log(id)
        const data = await
        fetch(`https://tripadvisor1.p.rapidapi.com/reviews/list?limit=20&currency=USD&lang=en_US&location_id=17514467`, {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		        "x-rapidapi-key": "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
	    }
    })
    const comments = await data.json();
    setComments(comments.data);
    console.log(comments)
 } 

 return(
        <div>
                 <h3>Food and Entertainment</h3>
                 {console.log(props.restaurants)}
                   {props.restaurants.map((restaurant) =>{
                    return(
                        <div key = {restaurant.location_id}>
                           <h1>Name: {restaurant.name}</h1>
                           <img src = {restaurant.photo.images.small.url} alt = {restaurant.name}/>
                           <h2>Address: {restaurant.address}</h2>
                           <h2>Phone: {restaurant.phone}</h2>
                           <h2>E-mail: {restaurant.email}</h2>
                            <h2>Website: {restaurant.website}</h2>
                           <h2>Category: {restaurant.ranking_category}</h2>
                           <h2>Rating: {restaurant.rating}</h2>
                           <h2>Ranking: {restaurant.ranking}</h2>
                           <h2>Ranking position: {restaurant.ranking_position}</h2>
                           <h2>Price: {restaurant.price}</h2>
                           <p>Description: {restaurant.description}</p>
                           
                           <p>ID: {restaurant.location_id}</p>
                           <Button
                                name = "See Comments"
                                handleOnClick = {fetchRestaurantComments} 
                           />
                           <div >
                               {/*console.log(comments)*/}
                               {comments.map((comment) => {
                                   return(
                                       <div key = {comment.id} >
                                           <h1>Title: {comment.title}</h1>
                                           <h2>ID: {comment.id}</h2>
                                       </div>
                                   )
                               })}
                           </div>
                        </div>
                    )
                })}

             </div>
    )
}

export default Restaurants;