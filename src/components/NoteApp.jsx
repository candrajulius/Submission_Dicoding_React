import { getInitialData } from "../utils/index";
import NoteSearch from "./NoteSearch";
import NoteInput from "./NoteInput";
import React, { useState } from "react";
import NoteList from "./NoteList";

const NoteApp = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [keyword, setSearchKeyword] = useState("");
  const [limit, setLimit] = useState(50);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmitInput = (e) => {
    e.preventDefault();
    const newNote = [
      {
        id: +new Date(),
        title: title,
        body: body,
        createdAt: new Date(),
        archived: false,
      },
      ...notes,
    ];
    setNotes(newNote);
    setTitle("");
    setBody("");
    setLimit(50);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleTitleChange = (e) => {
    const newValue = e.target.value;
    const newLimit = 50 - newValue.length;

    if (newValue.length > 50) {
      setLimit(0);
    } else {
      setTitle(newValue);
      setLimit(newLimit);
    }
  };

  const handleSearchByKeyword = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const removeItem = (id) => {
    const updateNote = notes.filter((note) => note.id !== id);
    setNotes(updateNote);
  };

  const handleChangeSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const onArchivedHandler = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const titleNameOne = "Catatan Aktif";
  const titleNameTwo = "Arsip Catatan";
  const emptyText = "Tidak Ada Catatan";

  return (
    <>
      <div className='note-app__header'>
        <h1>Notes App</h1>
        <NoteSearch search={keyword} onSearch={handleChangeSearch} />
      </div>
      <div className='note-app__body'>
        <NoteInput
          onSubmitHandler={handleSubmitInput}
          handleTitleChange={handleTitleChange}
          handleBody={handleBody}
          limit={limit}
          body={body}
          title={title}
        />
        <NoteList
          noteEmpty={emptyText}
          notes={notes}
          keyword={keyword}
          setSearchByKeyword={handleSearchByKeyword}
          onArchived={onArchivedHandler}
          onDelete={removeItem}
          textTitle={titleNameOne}
          conditionArchived={false}
        />
        <NoteList
          noteEmpty={emptyText}
          notes={notes}
          keyword={keyword}
          setSearchByKeyword={handleSearchByKeyword}
          onArchived={onArchivedHandler}
          onDelete={removeItem}
          textTitle={titleNameTwo}
          conditionArchived={true}
        />
      </div>
    </>
  );
};
export default NoteApp;
