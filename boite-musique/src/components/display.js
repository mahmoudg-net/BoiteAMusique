import React from "react";

function Display(props) {
  return (
    <div id="nowPlaying">
      <em>Now playing...</em>
      <h4 id="display"> {props.description}</h4>
    </div>
  );
}

export default Display;
