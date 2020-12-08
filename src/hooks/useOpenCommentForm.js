import {useState} from 'react';

const useOpenCommentForm = (location_id, name, type, address, location, latitude, longitude, locationImage, rating, num_reviews) => {
    
    const [isCommentForm, setIsCommentForm] = useState(false);
    const [locationName, setLocationName] = useState('');
    const [locationCommentId, setLocationCommentId] = useState(null);
    const [commentId, setCommentId] = useState(null);
    const [type, setType] = useState('');
    const [locationImage, setLocationImage] = useState('');
    const [rating, setRating] = useState(null);
    const [num_reviews, setNum_reviews] = useState(null);

    const openCommentForm = () => {
        setIsCommentForm(true)
      setLocationName(name);
      setLocationCommentId(location_id);
      setCommentId(location_id);
      setType(type);
      setLocationImage(locationImage);
      setRating(rating);
      setNum_reviews(num_reviews);
      console.log("Leave a comment about: " + name + " address: " + address + " type: "+ type + 
      " and location id " + location_id + " location " + location + " latitude: " + latitude + " longitude: " 
      + longitude + " rating " + rating + " number of reviews " + num_reviews)
    }
      const closeCommentForm = () =>{
        setIsCommentForm(false)
    }
      
 return{
    isCommentForm, locationName, locationCommentId, commentId, type, locationImage, rating, num_reviews,
    openCommentForm, closeCommentForm
 }
}

export default useOpenCommentForm;