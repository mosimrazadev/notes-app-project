import React from 'react'
import styles from "../style/auth.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { authContext } from '../context/auth-context'
import { useState } from 'react'

const LogIn = () => {
  const navigate = useNavigate();
  const {users, setCurrentUsers} = useContext(authContext);
  const [error, setError] = useState("");
  const [form, setForm] = useState({username: "", password: ""})
 
  const handleInput = (e) => {
    const eleName = e.target.name;
    const value = e.target.value;
 
    setForm({...form, [eleName]: value});
   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const userExists = users.find((u) => u.username === form.username);
    if(userExists && userExists.password !== form.password){
      setError("Invalid password");
      return;
    }


    if(userExists){
      setCurrentUsers({
        name: userExists.name,
        username: userExists.username
      });
      setForm({username: "", password: ""});
      navigate("/"); 
      return;
    } 

    setError("Invalid username");

  }

  return (
    <div className={styles.auth_container}>
      <div className={styles.auth_form}>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleInput} value={form.username} type="text" name='username' placeholder='Username' />
          <input onChange={handleInput} value={form.password} type='password' name='password' placeholder='Password'/>
          <button>Log In</button>
        </form>
        <span className={styles.error_msg}>{error}</span>
        <p>Don't have an account <Link to="/signup"> Sign Up</Link></p>
      </div>
    </div>
  )
}

export default LogIn  