import React from "react";
import NotesList from "../src/components/NotesList";
import {getInitialData} from "./utils/data";
import NotesInput from "../src/components/NotesInput";
import NoteSearch from "../src/components/NotesSearch";

class NotesApp extends React.Component{
    constructor(props){
        super(props);
            this.state= {
                notes: getInitialData(),
                search: null
            }
            this.onDeleteHandler = this.onDeleteHandler.bind(this);
            this.onArchiveHandler = this.onArchiveHandler.bind(this);
            this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
            this.noteSearchHandler = this.noteSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(event){
        const id = event.target.id
        this.setState((prevState) => {
            return {
                notes: prevState.notes.map((item) => item.id === parseInt(id) ? {...item, archived: !item.archived} : item)
            }
        })
    }

    onAddNotesHandler({ title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived: false
                    }
                ]
            }
        });
    }

    noteSearchHandler(event){
        const query = event.target.value.toLowerCase();
        this.setState(() => {
            return{
                search: query
            }
        })
    }

    search(item){
        if(this.state.search === null || this.state.search === ""){
            return this.state.notes
        }else if(item.title.toLocaleLowerCase().includes(this.state.search)){
            return item
        }
    }

    render() {
        return (
            <div className="notes-app">
                <div className="notes-app__header">
                    <h1>Notes App</h1>
                    <NoteSearch searchNote={this.noteSearchHandler}/>
                </div>
                <div className="notes-app__body">
                    <NotesInput addNote={this.onAddNotesHandler} />
                    <h2>Catatan</h2>
                    <NotesList notes={this.state.notes.filter((item) => this.search(item)).filter((item) => !item.archived)} deleteButton={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
                    
                    <h2>Arsip</h2>
                    <NotesList notes={this.state.notes.filter((item) => this.search(item)).filter((item) => item.archived)} deleteButton={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>       
                </div>
            </div>
        );
    }
}

export default NotesApp;