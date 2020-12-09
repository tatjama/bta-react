import React, {useState, useEffect} from 'react';
import Footer from './components/Footer';
import { NavLink, useHistory} from  'react-router-dom';
import {AppContext} from './libs/contextLib';
import Routes from './pages/Routes';
import useStateWithSessionStorage from './hooks/useStateWithSessionStorage';

const App = ()=>{
    const history = useHistory();
    const [isUserAuthenticated, setUserHasAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating ] = useState(true);
    const [value] = useStateWithSessionStorage('logInUser')

   function handleSignOut() {    
    sessionStorage.clear();    
    history.replace("/signin");
    setUserHasAuthenticated(false);
    alert('Sign Out');
}

useEffect(() => {     
    onLoad();    
}, [])

async function onLoad() {
    try {
        await 
        console.log('Is user in session?');
        if(value === ""){
            history.replace('/signin');
        }else{
            let user = JSON.parse(value);
            alert("user " + user.email + " is on session!")
            history.replace('/');
            await setUserHasAuthenticated({
                isAuthenticated:true,
                logInUser: user,
                rk:`${process.env.REACT_APP_RAPIDAPI_API}`,
                rkcc: `${process.env.REACT_APP_RAPIDAPI_CITY_COUNTRY_API}`
              })
        }
    } catch (error) {
        if(error !== 'No current user'){
            alert(error)
        }
    }
    setIsAuthenticating(false);
}
     
    return(
        !isAuthenticating &&
        <div className = "App-container" >            
            <div className="top-nav" id="my-top-nav">
                <ul> {  
                    isUserAuthenticated
                        ? <>
                        <li onClick = {handleSignOut}>Sign Out</li>
                    <NavLink to="/" exact activeClassName="active"><li>Home</li></NavLink>
                    <NavLink to="/life" activeClassName="active"><li>Life ...</li></NavLink>
                    {/*<NavLink to="/enjoy" activeClassName="active"><li >Enjoy</li></NavLink>*/}
                    {
                        (isUserAuthenticated.logInUser.status === 0)
                        && <NavLink to="/feedbacks" activeClassName="active"><li >Feedbacks</li> </NavLink>
}                    {
                        (isUserAuthenticated.logInUser.status === 1) 
                        && <NavLink to="/providers" activeClassName="active"><li id="providers" to="/providers">Providers</li></NavLink>
                    }
                        </>
                        : <>
                        <NavLink to="/signin" activeClassName="active-sign"><li>Sign in</li></NavLink>
                        <NavLink to="/signup" activeClassName="active-sign"><li>Sign Up</li></NavLink>                        
                        </>
                    }
                                    
                </ul>
            </div>
            <AppContext.Provider value = {{ isUserAuthenticated, setUserHasAuthenticated}} >  
              <Routes/> 
              </AppContext.Provider>       
        <Footer/>
        </div>
    )
}

export default App;