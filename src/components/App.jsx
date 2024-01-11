import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState({
    title: "",
    content: ""
  });

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
    useEffect(() => {
const copyNotes = [...notes]
copyNotes.sort((note1, note2) => note1.id<note2.id ? -1 : 1);
setNotes(copyNotes);
    },[notes]);
    

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== id;
      });
    });
  }

  function editNote(id) {
    const noteUnderEdit = notes.find((note) => note.id === id);
    deleteNote(id);
    setSelectedNote(noteUnderEdit);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} selectedNote={selectedNote} />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.id}
          id={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
          onEdit={() => editNote(noteItem.id)}
          onDelete={() => deleteNote(noteItem.id)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
