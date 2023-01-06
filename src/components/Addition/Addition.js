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

        return fetch('http://localhost:7777/notes', {
            method: 'POST',
            headers: {'content-type': 'application/json;charset=utf-8'},
            body: JSON.stringify({'content': content})
        })
        .then(res => res.text()) 
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