import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import NotesList from "./components/NotesList/NotesList";
import Search from "./components/Search/Search";
import "./global.css";


export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "My first note!",
      date: "03/02/2021",
    },
    {
      id: nanoid(),
      text: "My second note!",
      date: "04/02/2021",
    },
    {
      id: nanoid(),
      text: "My third note!",
      date: "05/02/2021",
    },
    {
      id: nanoid(),
      text: "My new note!",
      date: "06/02/2021",
    },
  ]);

  const [searchText, setSearchText] = useState(' ');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }


  return (
    < div className={`${darkMode && 'dark-mode'}`}>   
     <div className="container">
    <Header handleToggleDarkMode={setDarkMode} />
    <Search
      handleSearchNote={setSearchText}
    />
    <NotesList
      notes={notes.filter((note) =>
        note.text.toLowerCase().includes(searchText)
      )}
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
    />
  </div>
  </div>

  );
};

