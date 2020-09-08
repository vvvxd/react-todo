import React from "react";

const Editor = (props)=>{
return(
    <div className="todo__controls">
        <input type="text" className="todo__text"/>
        <button disabled="disabled" className="todo__add">Добавить</button>
    </div>
)
};
export default Editor;

