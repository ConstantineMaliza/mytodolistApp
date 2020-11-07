import React, { Component } from 'react';
import ToDoListService from '../services/todolist.services';

export default class GetToDo extends Component {

    constructor(props) {
        super(props);

        this.onDataChange = this.onDataChange.bind(this);

        this.state = {
            data: [],
            currentData: null,
            currentIndex: -1,
        };

        
    }
    componentDidMount() {
     ToDoListService.getAll().orderBy("title", "desc").onSnapshot(this.onDataChange);
    }

    onDataChange(snapshot) {
        let Todos = [];

        snapshot.forEach((childData) => {
            let id = childData.id;
            let data = childData.data();
            Todos.push({
                id: id,
                title: data.title,
            });
        });
        this.setState({
            data: Todos,
        });
    }



    render(){
        const { data, currentIndex} = this.state;
        return(
            <div>
                <ul>
                {data &&
              data.map((data, index) => (
                <li
                  className={ (index === currentIndex ? "active" : "") }
                  key={index}
                >
                  {data.title}
                </li>
              ))}
                </ul>
            </div>
        )
    }
}
