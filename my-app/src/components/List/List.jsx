import React from "react";
import './List.css';
import ShowList from "./ShowList/ShowList";
import Editor from "./Editor/Editor";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowText: '',
            itemsListArr: [],
            disabled: true,
        };

        this.addNewItem = this.addNewItem.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    addNewItem() {
        let newArray = [...this.state.itemsListArr];
        newArray.push(this.state.nowText);
        this.setState({
            itemsListArr: newArray,
            disabled:true,
            nowText: '',
        });
    }

    changeInput(value) {
        this.setState({
            nowText: value,
            disabled:false,
        });
    }

    render() {
        return (
            <div>
                <div id="list" className="todo">
                    <h2 className="todo__caption">Список дел</h2>
                    <ShowList/>
                    <Editor disabled={this.state.disabled} nowText={this.state.nowText} changeInput={this.changeInput} addNewItem={this.addNewItem}/>
                </div>
            </div>
        )
    }
}

export default List;