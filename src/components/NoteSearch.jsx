import React from "react";
const NoteSearch = ({ onSearch, search }) => {
  return (
    <div className='note-app__header'>
      <div className='note-search'>
        <input
          type='text'
          value={search}
          placeholder='Cari Catatan'
          onChange={onSearch}
        />
      </div>
    </div>
  );
};
export default NoteSearch;
