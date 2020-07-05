import React from 'react';
import './LinkButton.css'

/* Display a button as a link */
function LinkButton({text, onClick}) {
  return (
    <button className="LinkButton" onClick={onClick}>
      {text}
    </button>
  );
}

export default LinkButton;
