import React, {userState} from 'react';
import "./Authentication.css";
import Login from './Login';
import Signup from './Signup';

function Authentication() {
    const[active,setActive]=userState("login");

    const handleChange = () => {
        setActive(active === "login" ? "signup" : "login");
      };
     
  return (
    <div className='authentication'>
     <div className="auth__left">
        <img
          src="https://i.imgur.com/P3Vm1Kq.png" alt='instagram screnshot'/>
      </div>
      <div className='auth-right'>
      {active === "login" ? <Login /> : <Signup />}

       <Signup/>

        <div className="auth__more">
          <span>
          {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button onClick={handleChange}>Sign Up</button>
              </>
            ) : (
              <>
                Have an account? <button onClick={handleChange}>Log in</button>
              </>
            )}
          
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;


      