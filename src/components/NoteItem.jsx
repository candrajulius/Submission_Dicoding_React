import NoteButton from "./NoteButton";
import React from "react";
import { showFormattedDate } from "../utils";
const NoteItem = ({ note, archived, onDelete, onArchived }) => {
  return (
    <div className='note-item__content'>
      <h3 className='note-item__title'>{note.title}</h3>
      <p className='note-item__date'>{showFormattedDate(note.createdAt)}</p>
      <p className='note-item__body'>{note.body}</p>
      <NoteButton
        id={note.id}
        onDelete={onDelete}
        onArchived={onArchived}
        archived={archived}
      />
    </div>
  );
};
export default NoteItem;
