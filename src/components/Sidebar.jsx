import React from 'react'
import styles from "../style/sidebar.module.css"
import {Link} from "react-router-dom"
import { X } from 'lucide-react'
import { Home } from 'lucide-react'
import { Notebook } from 'lucide-react'
import { User } from 'lucide-react'


const sidebarLinks = [
  {
    label: "Home",
    link: "/",
    Icon: Home
  },
  {
    label: "Notes",
    link: "/notes",
    Icon: Notebook
  },
  {
    label:"About Me",
    link: "/about",
    Icon: User
  }
];



const Sidebar = ({show, onClose}) => {
  return (
    <div className={`${styles.sidebar} ${show ? styles.visible : ""}`} onClick={onClose}>
      <div className={`${styles.sidebar_content} ${show ? styles.sidebar_move : ""}`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
           <h4>Hi, Mosim</h4>
           <X onClick={onClose}/>
        </div>
        <div className={styles.sidebar_links}>
          {sidebarLinks.map((obj, index) => (
            <Link key={index} to={obj.link} className={styles.sidebar_link} onClick={onClose}> 
              {<obj.Icon />} {obj.label}
            </Link>
          ))}
        </div>
      </div> 
    </div>
  )
}

export default Sidebar