import firebase from '../components/Firebase';

const firebased = firebase.firestore();

const db = firebased.collection("Todolistapp");

const ToDoListService = {
    
    create(data) {
        return db.add(data);
    }
}

export default ToDoListService;