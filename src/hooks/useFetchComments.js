import {useState, useEffect} from 'react';
import {useAppContext} from '../libs/contextLib';

const useFetchComments = (callback) => {
    const { isUserAuthenticated} = useAppContext(); 
    const [comments, setComments] = useState([]);
    const [query, setQuery] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchComments = async (id) => {
         console.log(id)
         setIsError(false)
         setIsLoading(true)
         try {             
         const data = await
         fetch(`https://tripadvisor1.p.rapidapi.com/reviews/list?limit=20&currency=USD&
         lang=en_US&location_id=${id}`, {
             "method": "GET",
             "headers": {
                 "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                 "x-rapidapi-key": isUserAuthenticated.rk
         }
     })
     const comments = await data.json();
     await setComments(comments.data);
     await setQuery(id);
     console.log(comments);
         } catch (error) {
             setIsError(true)
         }  
     setIsLoading(false)  
  }
  useEffect(() => {
      console.log(query)
      console.log(comments)       
          callback()      
  }, [query, comments])

  return{query,comments, fetchComments, isLoading, isError}
}

export default useFetchComments;