import React from 'react';
import NotesItemContent from "./NotesItemContent";
import {showFormattedDate} from "../utils/data";
import NotesItemDelete from './NotesItemDelete';
import ArchiveButton from "./ArchiveButton"

function NotesItem ({ id, title, body, createdAt, deleteButton, onArchive, archive}) {
    return (
        <div className="notes-item">
            <NotesItemContent title={title} body={body} date={showFormattedDate(createdAt)} />
            <div className='notes-item__action'>
                <NotesItemDelete id={id} deleteButton={deleteButton} />
                <ArchiveButton id={id} onArchive={onArchive} archive={archive}/>
            </div>
        </div>
    );
}

export default NotesItem;