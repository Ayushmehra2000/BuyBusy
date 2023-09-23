import { createRef } from "react"
import "./login.css"
import { NavLink } from "react-router-dom";
import { useValue } from "../buybusyContent/BuybusyContent";


export function SignUp(){
    const {Signup,Error, setError} = useValue();
    const email = createRef();
    const password = createRef();
    const createAccount = async(email,password)=>{
        await Signup(email,password); 
        setTimeout(()=>{setError("")},3000);
    }

    const handleSignUp =(e)=>{
        e.preventDefault();
        if(email.current.value==="" || password.current.value===""){
            return;
        }
        createAccount(email.current.value,password.current.value)
        clear();
    }
    const clear =()=>{
        email.current.value="";
        password.current.value="";
    }
    return(<>
    <div className="login-container">
        <div id="SignUpBox" >
            <form >
                <h1>Create Account</h1><br/>
                {Error && <div className="error"><p>{Error}</p></div>}
                <input className="input" type="email" name="email" placeholder="E-mail" ref={email} required/>
                <input className="input" type="password" name="password" placeholder="Password" ref={password} required/>
                <button className="loginBtn" onClick={(e)=> handleSignUp(e)}>Create Account</button>
            </form>
            <p>
                Already have Account? <NavLink to="/login" ><span className="login-signup">  Login</span></NavLink>
            </p>
        </div>
    </div>
    </>)
}