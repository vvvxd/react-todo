import React from "react";
import ListItem from "./ListItem/ListItem";

const ShowList = (props) => {
    return (
        <div>
            <ul className="todo__list">
                <ListItem/>
            </ul>
        </div>
    )
};
export default ShowList;