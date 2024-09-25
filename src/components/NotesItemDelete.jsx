import React from 'react';
import { IoMdTrash } from "react-icons/io";

function NotesItemDelete({ id, deleteButton }) {
    return <button className='notes-item__delete-button' onClick={() => deleteButton(id)}><IoMdTrash /></button>
}

export default NotesItemDelete;

