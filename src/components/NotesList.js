import React from 'react'
import MyNote from './MyNote'
function NotesList({ notes, toggleImportance, mySearchRes, handleDelete }) {
    return (
        <div>
            {
                mySearchRes && mySearchRes.length >= 1 ?
                    mySearchRes.map((note) => (
                        <MyNote
                            key={note.id}
                            note={note}
                            toggleImportance={() => toggleImportance(note.id)}
                            deleteNote={() => handleDelete(note.id)}
                        ></MyNote>
                    )) :
                    notes.map((note) => (
                        <MyNote
                            key={note.id}
                            note={note}
                            toggleImportance={() => toggleImportance(note.id)}
                            deleteNote={() => handleDelete(note.id)}
                        ></MyNote>
                    ))

            }
        </div>
    )
}

export default NotesList
