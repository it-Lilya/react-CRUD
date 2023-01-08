import React, {useState} from "react";
import '../Addition/Addition.css';

export function Addition({onAdd}) {
    const [content, setContent] = useState("");

    const editingDate = (e) => {
        const { value } = e.target;
        setContent(value);
      };

    const addForm = (e) => {
        
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        let newObject = JSON.stringify({'content': content});
        xhr.open('POST', 'http://localhost:7777/notes');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (xhr.status !== 204) {
                return false
            } else {
                onAdd(newObject);
                setContent("");
            }
        }
        xhr.send(newObject);
      };
      
    return (
        <div>
            <p className="text">New Note</p>
            <form className="container" name='date' onSubmit={addForm}>
                <textarea className="textarea" value={content} onChange={editingDate} required></textarea> 
                <button className="button" type="submit">&#10148;</button>
            </form>
        </div>
    )
}