import React from 'react';
import firebase from './firebase/firebase';

const db = firebase.firestore();


 const UpdateAndDeleteTodo= ({todo})=>{
    const [title,setTitle] =React.useState(todo.title)

  const onUpdate =() =>{
    db.collection("Todolistapp").doc(todo.id).set({...todo,title})
   }
   const onDelete = () =>{
       db.collection("Todolistapp").doc(todo.id).delete()
   }
    return(
        <>
        <input 
        value={title}
        onChange={e =>{setTitle(e.target.value)}}
        />
        <button onClick={onUpdate}>Update</button>
        <button onClick={onDelete}>Delete</button>
        </>
    )

}
export default UpdateAndDeleteTodo;