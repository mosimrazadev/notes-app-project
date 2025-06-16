import React from 'react'
import { useState } from 'react';
import Dialog from './Dialog';
import styles from "../../style/notes.module.css"

const Notes = () => {
   const [showForm, setShowForm] = useState(false);
   const [notes, setNotes] = useState([]);

  return (
    <div>
      <div className={styles.navbar}>
       <h2>Notes App</h2>

      <button onClick={() => setShowForm(!showForm)}> Add Note</button>
      </div>

    <Dialog notes={notes} addNote={setNotes} show={showForm} onClose={() => setShowForm(false)}/>

      {notes.map((note) =>
        <div key={note.title} className={styles.note}>
          <h2>{note.title}</h2>
          <p>{note.message}</p>
        </div>
      )}
    </div>
  )
}

export default Notes;