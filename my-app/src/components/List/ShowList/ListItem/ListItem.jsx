import React from "react";

const ListItem = (props) => {
    const liValue = React.createRef();
    const changeCrossOut = () => {
        props.crossOut(props.index);
    };
    const onDelete = () => {
        props.delete(props.index);
    };


    return (
        <li className="todo__list-item">
            <span
                className={`todo__list-item-text  ${props.value.isCrossOut ? 'crossOut' : ''}`}
                onClick={changeCrossOut}
                ref={liValue}
            >
                {props.value.text}
            </span>
            <span className="todo__list-item-remove" onClick={onDelete}>&#10060;</span>
        </li>
    )
};
export default ListItem;