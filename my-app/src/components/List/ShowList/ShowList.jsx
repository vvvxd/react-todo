import React from "react";
import ListItem from "./ListItem/ListItem";

const ShowList = (props) => {
    return (
        <div>
            <ul className="todo__list">
                {
                    props.itemsListArr.map((item,index)=> {
                       return <ListItem value={item} index={index} key={index} crossOut={props.crossOut} delete={props.delete}/>
                    })
                }
            </ul>
        </div>
    )
};
export default ShowList;