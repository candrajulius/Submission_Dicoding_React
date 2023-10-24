import React, { useState } from "react";
const NoteInput = ({
  onSubmitHandler,
  handleTitleChange,
  handleBody,
  limit,
  body,
  title,
}) => {
  return (
    <div className='note-input'>
      <h2>Buat Catatan</h2>
      <form onSubmit={onSubmitHandler}>
        <p className='note-input_title_char-limit'>Sisa karater: {limit}</p>
        <input
          className='note-input__title'
          type='text'
          placeholder='Ini adalah judul'
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          className='note-input__body'
          placeholder='Tuliskan catatanmu disini ...'
          value={body}
          onChange={handleBody}
        />
        <button type='submit'>Buat</button>
      </form>
    </div>
  );
};
export default NoteInput;
