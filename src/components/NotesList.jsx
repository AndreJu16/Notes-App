import React from 'react';
import NotesItem from "./NotesItem";

function NotesList({notes, deleteButton, onArchive}) {
    return (
        notes.length === 0 ?
        (
            <p className="notes-list__empty-message">
                Tidak ada Catatan
            </p>
        ) 
        : 
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NotesItem key={note.id}
                    id={note.id}
                    onArchive={onArchive}
                    deleteButton={deleteButton}
                    archive={note.archived} 
                    {...note} />
                ))
            }
        </div>
    )
}

export default NotesList;