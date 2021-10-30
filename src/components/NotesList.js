import React from 'react'
import MyNote from './MyNote'
function NotesList({ notes, toggleImportance,mySearchRes }) {
    return (
        <div>
            {
                mySearchRes.length > 0 ? 
                    mySearchRes.map((note) => (
                        <MyNote
                            key={note.id}
                            note={note}
                            toggleImportance={() => toggleImportance(note.id)}
                        ></MyNote>
                    )): 
                    notes.map((note) => (
                        <MyNote
                            key={note.id}
                            note={note}
                            toggleImportance={() => toggleImportance(note.id)}
                        ></MyNote>
                    ))
                
            }
        </div>
    )
}

export default NotesList
