import React from 'react';

class NotesInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: '',
            character: 50
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const newCharacter = 50 - event.target.value.length
        const inputTitle = document.getElementById("inputTitle")
        if (newCharacter >= 0){
            inputTitle.value = event.target.value
            this.setState(() => {
                return {
                    title: event.target.value, 
                    character: newCharacter
                }
            });
        }
}

    onBodyChangeEventHandler(event){
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <div className='notes-input'>
                <h2>Catatan Baru</h2>
                <form onSubmit={this.onSubmitEventHandler}> 
                    <p className='notes-input__title__limit'> {this.state.character}</p>
                    <input id="inputTitle" className='notes-input__title' type="text" placeholder="Tuliskan judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                    <textarea id="inputBody" className='note-input__body' type="text" placeholder="Tuliskan catatan mu disini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NotesInput;
