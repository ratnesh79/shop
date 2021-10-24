import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom';
import './login.css';


function Login() {
    const history=useHistory();
    const [email,setemail]=useState(" ");
    const [password,setpassword]=useState('')
    const loginUser=async (e)=>{
           e.preventDefault();
           const res = await fetch('/signin',{
               method:"POST",
               headers:{
                   "Content-Type":'application/json'
               },body:JSON.stringify({
                     email,password
               })
           })
           const data=res.json();
           if(res.status===400 ||!data){
               window.alert("login failed")
           }else{
               window.alert("login successful")
               history.push('/')
           }
    }
    return <>
        <div className="login">
            <div className="login_img">
                <img src="https://www.safekaro.com/images/login.png" alt="Login image" width="100%"/>
                
            </div>
            <div className="login_data">
                <h1>Login In</h1>
                <form  method='POST'>
                    <div className="input">
                    <i class="zmdi zmdi-email"></i>
                        <input type="text" name="email" id="email" placeholder="Your Email" required value={email} onChange={(e)=> setemail(e.target.value)}/>
                    </div>
                    <div className="input">
                        <i class="zmdi zmdi-lock-open"></i>
                        <input type="password" name="password" id="password" placeholder="Your Password" required value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    </div>
                    <button className="bt btn_login" onClick={loginUser}>Login In</button>
                </form>
                <Link to="/register">Create an account</Link>
            </div>
        </div>

    </>
}
export default Login;