import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../style/homepage.module.css"

const Home = () => {
  return (
    <div>
       <div className={styles.navbar}>
        <Link className={styles.about} to="/about">About</Link>
        <Link to="/notes">Notes App</Link>
       </div>
       <p className={styles.body}>This is the Home page</p>
    </div>
    
  )
}

export default Home