import React from 'react';

import firebase from './firebase/firebase';
import UpdateAndDeleteTodo from './UpdateAndDeleteTodo';

const db = firebase.firestore();

function ToDoList() {
    const [todos, setTodos] = React.useState([]);
    const [newTodoTitle, setNewTodoTitle] = React.useState();

    React.useEffect(() => {
            return db.collection("Todolistapp").onSnapshot((snapshot)=>{
                   const toDoList=[];
                   snapshot.forEach(doc => toDoList.push({...doc.data(), id: doc.id}));
                   setTodos(toDoList);
            }) ;    
    }, [])

    const onCreate = () => {
        db.collection("Todolistapp").add({ title: newTodoTitle })
    }
    return (
        <ul>
            <input value={newTodoTitle} onChange={(e) => setNewTodoTitle(e.target.value)} />
            <button onClick={onCreate}>Create todolist</button>
            {todos.map(todo => (
                <li key={todo.id}>
                    <UpdateAndDeleteTodo todo={todo} />
                </li>
            ))}
        </ul>
    )
}

export default ToDoList;