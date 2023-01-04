import React, {useState} from "react";
import './Basic.css';
import { Addition } from "../Addition/Addition";

export function Basic () {
    const [result, setResult] = useState([]);

    const handleAdd = () => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:7777/notes");
        xhr.onload = () => {
            setResult(JSON.parse(xhr.response))
        }
        xhr.send();
    }

    const handleDelete = (id) => {
        let url = "http://localhost:7777/notes/" + id;
        console.log(url)
        console.log(result)
        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", url, false);
        xhr.send();
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
                              <button className="close" onClick={handleDelete(o.id)}>&#215;</button>

                        </div>
                    </li>
                ))}
            </ul>
            <Addition onAdd={handleAdd} />
            
        </div>
    )
}