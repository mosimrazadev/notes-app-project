import React from 'react'
import styles from "../style/auth.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { authContext } from '../context/auth-context'
import { useState } from 'react'

const SignUp = () => {
  const navigate = useNavigate();
  const {users, setUsers} = useContext(authContext);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", username: "", password: "", confirm_password: ""});
  console.log(users);
  
  

  const handleInput = (e) => {
   const eleName = e.target.name;
   const value = e.target.value;

   setForm({...form, [eleName]: value});
  };



  const handleSubmit = (e) => {
     e.preventDefault();
     setError("");

     if(!form.name || !form.username || !form.password || !form.confirm_password){
      setError("Please fill all the fields");
      return;
     }

     if(form.password !== form.confirm_password){
      setError("Password does not match")
      return;
     }

     const userExists = users.find((u) => u.username === form.username);
     if(userExists){
      setError("username already exists!") 
      return;
     }


     setUsers([...users, form]);
     setForm({ name: "", username: "", password: "", confirm_password: ""});

     navigate("/login")

  };

  return (
    <div className={styles.auth_container}>
        <div className={styles.auth_form}>
           <h1>Sign up</h1>
           <form onSubmit={handleSubmit}> 
            <input onChange={handleInput} value={form.name} type='text' name='name' placeholder='Full Name'/>
            <input onChange={handleInput} value={form.username} type='text' name='username' placeholder='Username'/>
            <input onChange={handleInput} value={form.password} type='password' name='password' placeholder='Password'/>
            <input onChange={handleInput} value={form.confirm_password} type='password' name='confirm_password' placeholder='Confirm Password'/>
            <button>Sign Up</button>
           </form>
           <span className={styles.error_msg}>{error}</span>
           <p>Already have an acoount <Link to="/login">Log In</Link></p>
           
        </div>
    </div>
  )
}

export default SignUp