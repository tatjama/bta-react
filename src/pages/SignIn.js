import React from 'react';
import {useHistory} from 'react-router-dom';
import useForm from '../hooks/useForm';
import validateSignIn from '../components/validateSignIn';
import {useAppContext} from '../libs/contextLib';
import login from "../components/utils/login";
//import useStateWithSessionStorage from '../components/utils/useStateWithSessionStorage';

const initValuesForSignIn = {
  email: '',
  password: '',
  status: 0
};

const SignIn = () => {
  const history = useHistory();
  const { setUserHasAuthenticated} = useAppContext();
  const { values, handleChange, handleSubmit, handleReset, errors } = useForm(submitted, validateSignIn, initValuesForSignIn, login);
  
 async  function submitted() {  
    console.log(values);
    try{
     const user = await   login(values);
     console.log(user);
     if(Object.keys(user).length !==0){
      alert('Submitted successfully');      
      sessionStorage.setItem('logInUser', JSON.stringify(user)) ;
      console.log('submitted ')
      //rk = "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"     -t.g.c
      //rk = "e972fb1e60msh0d592a9ef4ed992p1e0e2bjsne8349b28c470"       -t.m.p.b.c
      setUserHasAuthenticated({
              isAuthenticated:true,
              logInUser: user,
              rk:"84a65184famshb001956fd650790p1710e5jsnf0ddc18f6e0e",// - dm
              rkcc: "e972fb1e60msh0d592a9ef4ed992p1e0e2bjsne8349b28c470"
            });        
      history.push("/");
     }else{
       alert('invalid user')
     }     
      }catch{
        alert("User name or password is not valid")
      }
    }     
    
    return(
    <div className = "intro-page">        
      <div className="intro-page-gradient">           
        <form className="sign-form" id="sign-in-form" onSubmit = {handleSubmit}  noValidate >
          <fieldset>
            <legend>Sign in</legend>
            <br/>
            <span className="error-sign-in"  title="Error. E-mail format something@something.com"></span>
            <input 
                type="email"                 
                name = "email"
                className={`${errors.email && "inputError"}`}
                placeholder = " E-mail "
                id="sign-in-e-mail" 
                value = {values.email}
                onChange = {handleChange}
                autoFocus
                required = {true}                
            />
            <br/>
             {errors.email && <p className="error-message">{errors.email}</p>}
            <span className="error-sign-in"  title="Error. Password format only recive letters and numbers"></span>
            <input 
                type="password"                 
                name="password"
                className={`${errors.password && "inputError"}` }
                placeholder = " Password "
                id="sign-in-password"
                value = {values.password}
                onChange = {handleChange} 
                required = {true}                
            />
            {errors.password && <p className = "error-message">{errors.password}</p>}
            <br/>
            <br/>            
            <button type="submit" >Sign in </button>
            <button type="reset" onClick = {handleReset}>Clear</button>
        </fieldset>
      </form>      
    </div>
    </div>
    )
}

export default  SignIn;