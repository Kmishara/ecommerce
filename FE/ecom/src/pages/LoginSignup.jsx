import React from 'react'
import './CSS/LoginSignup.css'
import { useState } from 'react'
const LoginSignup = () => {
  const [state, setState] = useState("Login");
const [formData, setFormData] = useState({
  username:"",
  email:"",
  password:""
})
const changeHandeler = (e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}
  const login = async () =>{
    console.log("Login Function executed",formData)
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:"POST",
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((res)=>res.json()).then((data)=>responseData=data);
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/')
      }
  }

  const signup = async () =>{
    console.log("signup Function executed",formData)
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:"POST",
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((res)=>res.json()).then((data)=>responseData=data);
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/')
      }
  }
  return (
    <div className='loginsignup' >
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input type="text" name="username" value={formData.username} onChange={changeHandeler
          } placeholder='your name' id="" />:<></>}
          <input type="email" name="email" value={formData.email} onChange={changeHandeler} placeholder='enter email' id="" />
          <input type="password" name="password" value={formData.password} onChange={changeHandeler} placeholder='password' id="" />
          <button onClick={()=>{state==="Login"?login():signup()}} >Continue</button>
          {state==="Sign Up"?<p className="loginsignup-login"> Alredy have an account?
            <span onClick={()=>{setState("Login")}}>login here</span>
          </p>:<p className="loginsignup-login"> Create an account?
            <span  onClick={()=>{setState("Sign Up")}}>click here</span>
          </p>}
          
          
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing,i agree to the terms of use & privacy poloy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup