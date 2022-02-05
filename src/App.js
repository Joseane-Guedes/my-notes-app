import { nanoid } from "nanoid";
import { useState } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
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
    <div className="container">
      <Search />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />

    </div>
  );
};

export default App;
