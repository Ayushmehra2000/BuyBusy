import { createRef } from "react"
import "./login.css"
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase";
import { NavLink } from "react-router-dom";


export function SignUp({userdata, setUserdata}){
    const username = createRef();
    const email = createRef();
    const password = createRef();

    const addDataTodatabase= async(user)=>{
        const docRef = await addDoc(collection(db, "Userdata"), user);
    }

    const handleSignUp =(e)=>{
        e.preventDefault();
        if(username.current.value===""||email.current.value===""||password.current.value===""){
            return;
        }
        const user = {
            name: username.current.value,
            useremail: email.current.value,
            userpassword: password.current.value
        }
        addDataTodatabase(user);
        clear();
    }
    const clear =()=>{
        username.current.value = "";
        email.current.value="";
        password.current.value="";
    }
    return(<>
    <div className="login-container">
        <div id="SignUpBox" >
            <form >
                <h1>Create Account</h1><br/>
                <input className="input" type="text" name="name" placeholder="Name" ref={username} required/>
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