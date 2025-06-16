import React from 'react'
import styles from "../../style/notes.module.css"
import { useState } from 'react'

const Dialog = ({notes, addNote, show, onClose}) => {
    
    const [form, setForm] = useState({title: "", message: ""});
    const [error, setError] = useState("");

    const handleInput = (e) => {
      const eleName = e.target.name;
      const value = e.target.value;

      setForm({...form, [eleName] : value});
    }


    const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!form.title || !form.message){
        setError("Please fill all the fields");
        return;
    }

    addNote([...notes, form]);
    setForm({title: "", message: ""});
    setError("");
    }

  return (
    <div className={styles.dialog} style={{opacity: show? 1 : 0, visibility: show? "visible" : "hidden"}} onClick={onClose}>
        <div className={styles.dialog_content} onClick={(e) => e.stopPropagation()}>
          <h1>Add Note</h1>

          <div className={styles.form}>
            <input value={form.title} onChange={handleInput} name='title' type='text' placeholder='Title' />
            <textarea value={form.message} onChange={handleInput} name='message' type='text' placeholder='Message'/>
            <button onClick={handleSubmit}>Save</button>
          </div>

        <button className={styles.close_button} onClick={onClose}>X</button>
        {error}
        </div>
    </div>
  )
}

export default Dialog