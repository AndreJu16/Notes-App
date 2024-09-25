import React from "react";

function NoteSearch({searchNote}){
    return(
        <form id="searchBook" className="note-search">
            <label htmlfor="searchbookTitle"></label>
            <input id="searchBookTitle" type="text" placeholder="cari catatan ..." onChange={searchNote}/>
        </form>
    )
}

export default NoteSearch;