import { useState} from 'react';
import NotesList from "./components/NotesList";
import  {nanoid} from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState([
    {
        id: nanoid(),
        text: "My first note!",
        date: "03/02/2021"
  },
  {
    id: nanoid(),
    text: "My second note!",
    date: "03/02/2021"
},
{
  id: nanoid(),
  text: "My third note!",
  date: "03/02/2021"
},
{
  id: nanoid(),
  text: "My new note!",
  date: "03/02/2021"
}
]) ;

  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
