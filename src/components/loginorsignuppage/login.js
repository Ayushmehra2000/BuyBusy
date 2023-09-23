import "./login.css"
import { useValue } from "../buybusyContent/BuybusyContent"
import { createRef } from "react";
import { NavLink } from "react-router-dom";
export function Login(){
    const email = createRef();
    const password = createRef();
    const {Login,Error, setError} = useValue();

    const userLogin = async(email,password)=>{
        await Login(email,password);
        setTimeout(()=>{setError("")},3000)
    }
    const handleLogin=(e)=>{
        e.preventDefault();
        if(email.current.value==="" || password.current.value===""){
            return;
        }
        userLogin(email.current.value,password.current.value)
        clear();
    };
    const clear =()=>{
        email.current.value="";
        password.current.value="";
    }
    return(<>
    <div className="login-container">
        <div id="loginBox" >
            <form>
                <h1>Login</h1><br/>
                {Error && <div className="error"><p>{Error}</p></div>}
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