import { nanoid } from "nanoid";
import { useState } from "react";
import NotesList from "./components/NotesList";

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

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default App;
