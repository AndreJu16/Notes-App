import React from 'react';   

function NotesItemContent ({ title, body, date  }) {
    return (
        <div className="notes-item__body">
            <h3 className="notes-item__title">{title}</h3>
            <p className="notes-item__createdAt">{date}</p>
            <p className="notes-item__body">{body}</p>
        </div>
    );
}

export default NotesItemContent;
