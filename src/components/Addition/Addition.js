import React, {useState} from "react";
import shortid from "shortid";
import '../Addition/Addition.css';

export function Addition({onAdd}) {
    const [content, setContent] = useState("");

    const editingDate = (e) => {
        const { value } = e.target;
        setContent(value);
      };

    const addForm = (e) => {
        e.preventDefault();
        let newObject = {id: shortid.generate(), content}
        onAdd(newObject);
        setContent("");
        let xhr = new XMLHttpRequest();
        let json = JSON.stringify({'content': content});
        xhr.open("POST", "http://localhost:7777/notes");
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(json);
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