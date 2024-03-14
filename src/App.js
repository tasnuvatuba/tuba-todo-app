
import './App.css';
import { NoteForm } from "./NoteForm/NoteForm";

function App() {

  const addNote = (newNote) => {
    // setNotes([...notes, newNote])
    console.log(newNote)
  }

  return (
    <div>
      <NoteForm submitNote={addNote}/>
    </div>
  );
}

export default App;
