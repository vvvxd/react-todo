import React from "react";
import './List.css';
import ShowList from "./ShowList/ShowList";
import Editor from "./Editor/Editor";

class List extends React.Component {
    render() {
        return (
            <div>
                <div id="list" className="todo">
                    <h2 className="todo__caption">Список дел</h2>
                    <ShowList/>
                    <Editor/>
                </div>
            </div>
        )
    }
}

export default List;