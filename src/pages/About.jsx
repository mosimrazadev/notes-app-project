import React from 'react'
import profileImg from "../assets/profile.jpg";
import styles from "../style/about.module.css"   

const About = () => {
  return (
    <div className={styles.container}>
        <div>
            <img className={styles.profile} src={profileImg} alt="profile" />
        </div>
        <div className={styles.content}>
        <div className={styles.myself}>Hi, I'm 
            <span className={styles.name}> Mosim Raza</span>👋
        </div>
        <div className={styles.intro}>
            <p>
            I'm a final-year BCA student passionate about building web applications, learning new technologies,
            and solving real-world problems with code.
            </p>
            </div>
            <div className={styles.about_work}>
                <p>I enjoy working with <b>React, Node.js, MongoDB,</b>and other
                modern web tools. My goal is to become a full-stack developer and contribute to impactful tech projects.</p>
            </div>
            <div className={styles.about_intrest}>
                <p>
            Outside of coding, I love reading tech blogs, exploring open-source projects, and mentoring juniors in web
            development.
            </p>
            </div>
            <button className={styles.download_button}>Download Resume</button>
          
            </div>
    </div>
  )
}

export default About;