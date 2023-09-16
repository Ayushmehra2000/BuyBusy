import "./login.css"
export function Login(){
    const handleLogin=()=>{

    }
    return(<>
    <div className="login-container">
        <div id="loginBox" >
            <form>
                <h1>Login</h1><br/>
                <input type="email" placeholder="E-mail" required/>
                <input type="password" placeholder="Password" required />
                <button className="loginBtn" onClick={handleLogin}>Log In </button>
            </form>
            <p>
                Or ,<span>  Sign Up</span>
            </p>
        </div>
    </div>
    </>)
}