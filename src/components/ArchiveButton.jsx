import React from 'react';
import { MdUnarchive, MdArchive } from "react-icons/md";

function ArchiveButton({ id, onArchive, archive}) {
    return <button className='notes-item__archive-button' id={id} onClick={(event) => onArchive(event)}>{archive ? <MdUnarchive /> : <MdArchive /> }</button>
}

export default ArchiveButton;