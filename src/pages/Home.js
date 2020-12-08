import React from 'react';
import SelectForm from '../components/SelectForm';
import {useAppContext} from '../libs/contextLib';

const Home = () =>{
 // const [user, setUser] = useState({})
  const { isUserAuthenticated} = useAppContext();      
  console.log( isUserAuthenticated)
  //const user = useContext(useAppContext)
  //console.log(user)
 
    return(
      <header className="header" id="header-home">
                  <div id="message">
                    Welcome {" " +isUserAuthenticated.logInUser.firstName + " " + isUserAuthenticated.logInUser.lastName}
                  </div>
                  <SelectForm/>
              </header>            
    )
  }

  export default Home;