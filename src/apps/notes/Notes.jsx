import Dialog from "./Dialog";
import { useState } from "react";
import styles from "../../styles/notes.module.css";
import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";

const colors = [
  "#FFFAFA",
  "#F5FFFA",
  "#F0F8FF",
  "#F0FFF0",
  "#E6E6FA",
  "#FFF5EE",
  "#FFFFF0",
  "#FFFFE0",
  "#F7E7CE",
  "#F5F5DC",
  "#F5F5F5",
  "#B0E0E6",
  "#FFDAB9",
  "#FFF8DC",
];

const Notes = () => {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(null);
  const [notes, setNotes] = useState([
  {
    id: 1,
    title: "Secure Notes Anytime",
    message: "Save, organize, and access your important notes quickly from anywhere, anytime easily.",
  },
  {
    id: 2,
    title: "Smart Note Management",
    message: "Create, edit, delete, and manage your daily notes with a clean interface.",
  },
  {
    id: 3,
    title: "Fast And Simple Notes",
    message: "Lightweight notes application designed for quick writing, editing, and organizing important thoughts.",
  },
  {
    id: 4,
    title: "Organize Your Ideas",
    message: "Keep your personal thoughts, tasks, and reminders organized in one secure place.",
  },
  {
    id: 5,
    title: "Minimal Yet Powerful",
    message: "Simple notes application with powerful features for managing daily tasks and quick ideas.",
  },
  {
    id: 6,
    title: "Notes Made Easy",
    message: "Easily write, update, and manage notes using a responsive and user-friendly interface.",
  },
  {
    id: 7,
    title: "Your Digital Notebook",
    message: "Store important information, reminders, and daily thoughts safely with instant accessibility.",
  },
  {
    id: 8,
    title: "Quick Notes Solution",
    message: "Efficient application for creating and organizing notes with smooth user experience.",
  },
  {
    id: 9,
    title: "Daily Task Organizer",
    message: "Manage your daily tasks, reminders, and important schedules in a simple way.",
  },
  {
    id: 10,
    title: "Creative Ideas Hub",
    message: "Capture creative thoughts and important ideas instantly before you forget them.",
  },
  {
  id: 11,
  title: "Simple Productivity Tool",
  message: "Boost your productivity by keeping all important notes and reminders organized daily.",
},
{
  id: 12,
  title: "Quick Reminder Notes",
  message: "Create instant reminders and never miss your important tasks or daily activities again.",
},
{
  id: 13,
  title: "Easy Note Access",
  message: "Access all your saved notes quickly with a clean and responsive user interface.",
},
{
  id: 14,
  title: "Daily Thoughts Keeper",
  message: "Write down your daily thoughts, ideas, and important moments safely in one place.",
},
{
  id: 15,
  title: "Modern Notes Experience",
  message: "Enjoy a smooth and modern note-taking experience with simple management features.",
},
]);
  const [showMore, setShowMore] = useState(null);

  console.log(notes);

  const addNote = (data) => {
    setNotes([...notes, data]);
  };

  const updateNote = (data) => {
    console.log(data);
    // const newNotes = [...notes];
    // newNotes[isEditing] = data;
    const updatedNotes = notes.map((note) => (note.id === data.id ? data : note));
    setNotes(updatedNotes);
  };

  const editNote = (index) => {
    setIsEditing(index);
    setShowForm(true);
  };

  const removeNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const onClose = () => {
    setShowForm(false);
    setIsEditing(null);
  };

  return (
    <div className={styles.notes}>
      <div className={styles.header}>
        <h2>Notes App</h2>
        <button onClick={() => setShowForm(true)}>Add Note</button>
      </div>

      <Dialog editNote={notes[isEditing]} updateNote={updateNote} addNote={addNote} show={showForm} onClose={onClose} />

      <div className={styles.notes_container}>
        {notes.map((note, index) => (
          <div key={index} className={styles.note} style={{ backgroundColor: colors[index % colors.length] }}>
            <h1>{note.title}</h1>
            <p className={showMore == index ? "" : styles.line_clamp_3}>{note.message}</p>

            <button
              onClick={() => setShowMore(showMore == index ? null : `${index}`)}
              style={{ display: note.message.length > 103 ? "block" : "none" }}
            >
              Show {showMore == index ? "less" : "more"}
            </button>

            <Pencil onClick={() => editNote(index)} />
            <Trash onClick={() => removeNote(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
