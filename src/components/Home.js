import React, { useState, useEffect } from 'react'
import AddNote from './AddNote';
import NotesList from './NotesList';
import Notification from './Notification';
import SearchResult from './Search';
import noteService from '../utils/noteService';
import axios from 'axios';
const Home = () => {

    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("a new note...");
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showAll, setShowAll] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const handleNoteChange = (e) => {
        setNewNote(e.target.value);
        // console.log(e.target.value)
    }
    useEffect(() => {
        // console.log('effect')
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                // console.log('promise fulfilled')
                setNotes(response.data)
            })
    }, [])
    // console.log('render', notes.length, 'notes')

    const handleNoteSubmit = (e) => {
        e.preventDefault();
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1
        };
        // setNotes(...notes,noteObject);
        setNotes(notes.concat(noteObject));
        setNewNote("");
    }
    const handleNoteSearch = (e) => {
        setSearchInput(e.target.value);
    }
    const handleSearchResult = (searchValue) => {
        setSearchInput(searchValue);
        // console.log(searchResult);
        if (searchInput !== "") {
            const searchRes = notes.filter((item) => {
                return Object.values(item)
                    .join("")
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
            });
            setSearchResult(searchRes);
        } else {
            setSearchResult(notes);
        }
    }

    const notesToShow = showAll ? notes : notes.filter((note) => note.important === true);
    // console.log(notes)

    const toggleImportanceOf = (id) => {
        const note = notes.find((n) => n.id === id);
        const changedNote = { ...note, important: !note.important };

        noteService
            .update(id, changedNote)
            .then((returnedNote) => {
                setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
            })
            .catch((error) => {
                setErrorMessage(
                    `Note '${note.content}' was already removed from server`
                );
                setTimeout(() => {
                    setErrorMessage(null);
                }, 5000);
            });
    };
    return (
        <div style={{ padding: '20px' }}>
            <Notification message={errorMessage} />
            <AddNote handleChange={handleNoteChange} handleSubmit={handleNoteSubmit} value={newNote} />
            <hr />
            <div style={{ margin: '2p 0 15px 0', display: 'grid', gridTemplateColumns: '140px auto', gridGap: '15px' }}>
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="btn btn-secondary"
                >
                    show {showAll ? "important" : "all"}
                </button>
                <SearchResult searchChange={handleSearchResult} />
            </div>
            <div style={{ marginTop: '10px' }}>
                <NotesList notes={notesToShow} toggleImportance={toggleImportanceOf} mySearchRes={searchResult} />
            </div>
        </div>
    )
}

export default Home