import React, {useState} from "react";
import './Basic.css';
import { Addition } from "../Addition/Addition";

export function Basic() {
    const [result, setResult] = useState([]);

    const handleAdd = () => {
        fetch('http://localhost:7777/notes')
            .then(response => response.json())
            .then(data => setResult(data))
    }
    
    const handleDelete = (id) => {
        let url = "http://localhost:7777/notes/" + id.target.id;
        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", url, false);
        xhr.send();
        handleAdd();
    }

    return (
        <div className="contain">
            <div className="notes">
                <h2>Notes</h2>
                <button className="text-btn" onClick={handleAdd}>&#8635;</button>
            </div>
            
           <ul className="list-container">
                {result.map((o) => (
                    <li key={o.id}>
                        <div className="l">
                            {o.content}
                              <button className="close" onClick={handleDelete} id={o.id}>&#215;</button>
                        </div>
                    </li>
                ))}
            </ul>
            <Addition onAdd={handleAdd} />
        </div>
    )
}