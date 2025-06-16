import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../style/navbar.module.css"
import {SidebarIcon} from "lucide-react"
import { useState } from 'react'
import Sidebar from './Sidebar'

const Navbar = () => {

    const [showSidebar, setShowSidebar] = useState(false);

  return (

    <div className={styles.navbar}>
      <div className={styles.header_icon}>
        <SidebarIcon onClick={() => setShowSidebar(true)}/>
        <Link to="/">Home</Link>
      </div>
          <div>
            <Link to="/login">Log In</Link>
          </div>
        <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)}/>

    </div>
  )
}

export default Navbar