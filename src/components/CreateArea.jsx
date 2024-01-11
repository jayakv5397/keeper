import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const hasContent = (s) => s.length > 0;

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(
    false
  );
  useEffect(() => {
    setExpanded(
      hasContent(props.selectedNote.title) ||
        hasContent(props.selectedNote.content)
    );
  }, [props.selectedNote]);
  const [note, setNote] = useState(props.selectedNote);
  useEffect(() => {
    setNote(props.selectedNote);
  }, [props.selectedNote]);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    setNote({
      title: "",
      content: ""
    });
    props.onAdd({ id: Date.now(), ...note });
    setExpanded(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={() => setExpanded(true)}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
