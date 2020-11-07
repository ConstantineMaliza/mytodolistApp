import React from 'react';

import firebase from './firebase/firebase';
import UpdateAndDeleteTodo from './UpdateAndDeleteTodo';

const db = firebase.firestore();

function ToDoList() {
    const [todos, setTodos] = React.useState([]);
    React.useEffect(() => {
        const fetchdata = async () => {
            const data = await db.collection("Todolistapp").get()
            setTodos(data.docs.map(doc => ({...doc.data(), id:doc.id })));
        }
        fetchdata()
    }, [])

    return (
            <ul>
                {todos.map(todo => (
                    <li key={todo.title}>
                        <UpdateAndDeleteTodo todo={todo}/>
                      </li>
                ))}
            </ul>
    )
}

export default ToDoList;