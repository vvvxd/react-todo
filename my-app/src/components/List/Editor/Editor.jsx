import React from "react";

const Editor = (props) => {
    const changeInput = (e) => {
        let text = e.target.value;
        props.changeInput(text);
    };
    const addNewItem = () => {
        props.addNewItem();
    };

    return (
        <div className="todo__controls">
            <input value={props.nowText} type="text" className="todo__text" onChange={changeInput}/>
            <button disabled={props.disabled} className="todo__add" onClick={addNewItem} >Добавить</button>
        </div>
    )
};
export default Editor;

