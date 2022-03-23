import React from 'react'
import "./Login.css";
import { Button } from '@mui/material';
import { auth, provider } from "./firebase";

function Login() {

  const signIn = () => {
     // do clever google login 
     auth.signInWithPopup(provider).catch((error) => alert(error.message));
     
  };

  return (
    <div className="login">      
      <div className="Login__logo">
        <img src="data:image/png;base64,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" jsaction="load:XAeZkd;" jsname="HiaYvf" class="n3VNCb"alt=""/>
      </div>

      <Button onClick={signIn}>Sign In</Button>
    
    </div>
  )
}

export default Login