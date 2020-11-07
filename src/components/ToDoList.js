import React, { Component } from 'react';

import ToDoListService from "../services/todolist.services";

export default class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.onChangeInput = this.onChangeInput.bind(this);
        this.saveToDo = this.saveToDo.bind(this);


        this.state = {
            title: "",

            submitted: false,
        }
    }
    onChangeInput(e) {
        this.setState({
            title: e.target.value,
        });
    }
    saveToDo() {
        let data = {
            title: this.state.title,
        };
        ToDoListService.create(data)
            .then(() => {
                console.log("done created");

                this.setState({
                    title: '',

                    submitted: true,
                });

            });
    }


    render() {
        return (
            <div className="to-do-list-main">
                <input
                    type="text"
                    id="title"
                    required
                    value={this.state.title}
                    onChange={this.onChangeInput}
                    name="title"
                />
                <button onClick={this.saveToDo}>Add</button>

            </div>
        )
    }
}