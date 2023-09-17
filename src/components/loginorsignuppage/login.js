import "./login.css"
import { useValue } from "../buybusyContent/BuybusyContent"
import { createRef } from "react";
import { NavLink } from "react-router-dom";
export function Login(){
    const email = createRef();
    const password = createRef();
    const {isLoggedIn, setIsloggedIn,userdata} = useValue();
    const handleLogin=(e)=>{
        const emailcheck = email.current.value;
        const passwordcheck = password.current.value;
        e.preventDefault();
        console.log(userdata);
        const check = userdata.find((user) => user.useremail === emailcheck && user.userpassword === passwordcheck);
        if(check){
            setIsloggedIn(true);
        }
        console.log(emailcheck,passwordcheck,check, isLoggedIn);
    };
    return(<>
    <div className="login-container">
        <div id="loginBox" >
            <form>
                <h1>Login</h1><br/>
                <input type="email" placeholder="E-mail" ref={email} required/>
                <input type="password" placeholder="Password" ref={password} required />
                <button className="loginBtn" onClick={(e)=>handleLogin(e)}>Log In </button>
            </form>
            <p>
                Or ,<NavLink to="/signup" ><span className="login-signup">  SignUp</span></NavLink>
            </p>
        </div>
    </div>
    </>)
}