import React, { useState } from 'react'
import { Link ,useHistory} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './login.css';


function Register() {
    const history=useHistory();
    const [user,setuser]=useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    })
  let name,value;
    const handleInputes=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setuser({...user,[name]:value})
    }

    const PostData= async (e)=>{
       e.preventDefault();
       const {name,email,phone,work,password,cpassword}=user;
      const res =await fetch("/register",{
          method:"POST",
          headers:{
              "Content-Type" : "application/json"
          },
          body:JSON.stringify({
            name,email,phone,work,password,cpassword
          })
      });
      const data = await res.json();

      if(res.status===422 || !data){
          window.alert("registration failed")
          console.log("registration failed")
      }else{
          window.alert("registration successful");
          console.log("registration successful ")
          history.push("/login")
      }
    }
    return <>
     
        <div className="regist_container">


            <div className="regist">
                <div className="regist_data">
                    <h1>Registration</h1>
                    <form  method="POST" className="regist_form">
                        <div className="input">
                            <span><i class="zmdi zmdi-account"></i></span>
                            <input type="text" name="name" id="name" placeholder="Your Name"
                            value={user.name}
                            onChange={handleInputes} required />
                        </div>
                        <div className="input">
                        <i class="zmdi zmdi-email"></i>
                            <input type="email" name="email" id="email" placeholder="Your Email"
                            value={user.email}
                            onChange={handleInputes}  required/>
                        </div>
                        <div className="input">
                        <i class="zmdi zmdi-phone"></i>
                            <input type="number" name="phone" id="phone" placeholder="Mobile Number"
                            value={user.phone}
                            onChange={handleInputes} required/>
                        </div>
                        <div className="input">
                        <i class="zmdi zmdi-case-check"></i>
                            <input type="text" name="work" id="work" placeholder="Your Profession"
                            value={user.work}
                            onChange={handleInputes} required/>
                        </div>
                        <div className="input">
                        <i class="zmdi zmdi-lock-open"></i>
                            <input type="password" name="password" id="password" placeholder="Your Password"
                            value={user.password}
                            onChange={handleInputes} required/>
                        </div>
                        <div className="input">
                        <i class="zmdi zmdi-mall"></i>
                            <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password"
                            value={user.cpassword}
                            onChange={handleInputes} required/>
                        </div>
                       
                        <button className="bt btn_regist" onClick={PostData}>Register</button>
                    </form>
                          <Link to="/login">* I have already registered</Link>
                </div>
                <div className="regist_img">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/free-registration-desk-1886554-1598085.png" alt="" />


                </div>
            </div>
        </div>
    </>
}
export default Register;