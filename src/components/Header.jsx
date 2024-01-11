import React from "react";
import HighlightIcon from '@material-ui/icons/Highlight';
import NoteRoundedIcon from '@material-ui/icons/NoteRounded';

function Header() {
  return (
    <header>
      <h1><NoteRoundedIcon style={{ fontSize: 30, paddingTop: "5px" }} />Keeper</h1>
    </header>
  );
}

export default Header;
