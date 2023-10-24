import NoteItem from "./NoteItem";
import React from "react";

const NoteList = ({
  notes,
  keyword,
  setSearchByKeyword,
  onDelete,
  onArchived,
  textTitle,
  noteEmpty,
  conditionArchived,
}) => {
  const filterNotes = keyword.length === 0 ? notes : setSearchByKeyword;
  const filteredAndArchiveNotes = filterNotes.filter(
    (note) => note.archived === conditionArchived
  );
  return (
    <>
      <h2>{textTitle}</h2>
      {filteredAndArchiveNotes.length === 0 ? (
        <p>{noteEmpty}</p>
      ) : (
        <div className='notes-list'>
          {filteredAndArchiveNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onArchived={onArchived}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default NoteList;
