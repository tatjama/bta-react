import React from "react";
import { Route, Switch} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Enjoy from './Enjoy';
import Feedbacks from './Feedbacks'; 
import Providers from './Providers';
//import NotFound from './NotFound';
import City from './City';

export default function Routes() {

  return (
        <Switch>  
            <Route path = "/signIn"  component = {SignIn}/>  
            <Route path = "/signup" component = {SignUp} />
            <Route path = "/" exact  component = {Home}/>         
            <Route path = "/life" component = {City} />
            <Route path = "/enjoy" component = {Enjoy}/>
            <Route path = "/feedbacks" component = {Feedbacks} />
            <Route path = "/providers" component = {Providers} />   
            <Route path = "/:id" component = {City}/>          
            <Route  component = {SignIn} />   
        </Switch>
    );
}