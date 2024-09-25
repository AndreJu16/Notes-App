import React from "react";
import Input from "./input";

function NoteTopBar({ search, setQuery }) {
    return (
        <div className="note-app__TopBar">
            <h1>Notes App</h1>
            <div className="note-search"> 
                <Input
                value={search}
                onChange={setQuery}
                type="search"
                id="search_note"
                name="search_note"
                placeholder="Find Notes..."
                />
            </div>
        </div>
    )
}

export default NoteTopBar;


