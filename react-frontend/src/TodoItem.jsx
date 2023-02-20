import { useState } from "react";
import './App.css';

function TodoItem({ todo, key,update }) {

  const [edit, setEdit] = useState(false);
  const [newTodo, setNewTodo] = useState("");

 
  // update when a new task is submitted
  function changeTodo(e) {
    e.preventDefault();
    let item = newTodo;
    let pos = todo.id;
 
    let body = {
      data: {
        item
      }
    };

    fetch(`${process.env.REACT_APP_BACKEND}api/todos/${pos}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(() => {
        setEdit(false);
        update();
      })
  }

//delete a task
  function deleteTodo(e) {
    e.preventDefault();
    let pos = todo.id;
 
    fetch(`${process.env.REACT_APP_BACKEND}api/todos/${pos}`, {
      method: "DELETE"
    })
      .then(() => {
        update();
      })
  }

  return <div className="todo">
   {/* Display existing task or edit mode text field */}
    { !edit
        ? <div className="name">{todo.attributes.Task}</div>
        //Call update method on submit of edited task
        : <form onSubmit={changeTodo}>
            {/* on change text in edit mode, set it to the newTodo  */}
            <input className="todo_input" type="text" placeholder="Enter new todo" value={newTodo} onChange={e => setNewTodo(e.currentTarget.value)} />
            <button className="todo_button" type="submit">Change task</button>
          </form>
    }
    <div>
      <button className="delete" onClick={deleteTodo}>delete</button>
      <button className="edit" onClick={() => {
        // this button toggles the "edit" state variable
        setEdit(!edit)

        setNewTodo(todo.attributes.Task)
      }}>edit</button>
    </div>
  </div>
}

export default TodoItem;