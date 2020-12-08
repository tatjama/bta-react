import React from 'react';

export default function IntroHeader() {
    //onClick
    function showSignUpForm(){
      alert('press Sign Up');
        document.getElementById('go-sign-in-form').style.display = "block";
        document.getElementById('go-sign-up-form').style.display = "none";
        document.getElementById('sign-in-form').style.display = "none";
        document.getElementById('sign-up-form').style.display = "block";
      }
      function showSignInForm(){
        document.getElementById('go-sign-in-form').style.display = "none";
        document.getElementById('go-sign-up-form').style.display = "block";
        document.getElementById('sign-in-form').style.display = "block";
        document.getElementById('sign-up-form').style.display = "none";
      }
      function showStartPage() {
        document.getElementById('start').style.display = 'none';
       // document.getElementById('start-page').style.display = "block";
        document.getElementById('home-page').style.display = "block";
        document.getElementById('intro-page').style.display = "none";
      }
   

    return(
        <header className="container">

      {/*<!--NAVIGATION-->*/}
          <div className="sign-nav">
            <button id="start"  onClick={showStartPage} style={{display: "none"}}>Start</button>           
            <button id="go-sign-up-form"  onClick={showSignUpForm}>Sign Up</button>
            <button id="go-sign-in-form" onClick={showSignInForm} style={{display:"none"}}>Sign In</button>            
          </div>
        </header>

    )
}