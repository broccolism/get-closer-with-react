import React from "react";

function Board({ title, writer, handleChange, handleSave }) {
  return (
    <div>
      <input
        placeholder="title"
        name="brdtitle"
        value={title}
        onChange={handleChange}
      />
      <input
        placeholder="name"
        name="brdwriter"
        value={writer}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Board;
