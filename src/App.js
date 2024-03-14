
import './App.css';
import { uid } from "uid";
import { NoteTable } from "./NoteTable";
import { NoteForm } from "./NoteForm/NoteForm";

const mockNotes = [
  {
    id: uid(),
    title: "Note 1",
    desc: "Note 1 description",
    priority: 5,
    status: "Pending",
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
  {
    id: uid(),
    title: "Note 2",
    desc: "Note 2 description",
    priority: 5,
    status: "Pending",
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
  {
    id: uid(),
    title: "Note 3",
    desc: "Note 3 description",
    priority: 3,
    status: "Pending",
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
]



function App() {

  const addNote = (newNote) => {
    // setNotes([...notes, newNote])
    console.log(newNote)
  }

  return (
    <div>
      <NoteTable notes = {mockNotes}/>
      <NoteForm submitNote={addNote}/>
    </div>
    
  );
}

export default App;
