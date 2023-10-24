import React from "react";
function NoteButton({ id, onDelete, onArchived, archived }) {
  return (
    <div className='note-item__action'>
      <button className='note-item__delete-button' onClick={() => onDelete(id)}>
        Delete
      </button>
      <button className='note-item__archive' onClick={() => onArchived(id)}>
        {archived === true ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  );
}
export default NoteButton;
