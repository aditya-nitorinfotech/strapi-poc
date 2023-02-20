import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    // when the component is rendered for the first time, update list of tasks/to do's
    update();
  }, []);

  // This function updates the component with the current task data from the server
  function update() {
    fetch(`${process.env.REACT_APP_BACKEND}api/todos`)
      .then(res => res.json())
      .then(todo => {
        // console.log("able to fetch, data is:", todo.data)
        setTodos(todo.data);
      })
  }

  // This function sends a new task to the server and updates component
  function addTodo(e) {
    e.preventDefault();
    let item = newTodo;
    let body = {
      data: {
        item

      }
    };

    fetch(`${process.env.REACT_APP_BACKEND}api/todos`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(() => {
        setNewTodo("");
        update();
      })
  }

  return (
    <div className="app">
      <main>


        {/* This form submits new task to the server */}
        <form className="form" onSubmit={addTodo}>
          <input type="text" className="todo_input" placeholder="Enter new task" value={newTodo} onChange={e => setNewTodo(e.currentTarget.value)} />
          <button type="submit" className="todo_button">Add task</button>
        </form>

        {/* This is a list view of all the todos in the "todo" state variable */}
        <div>
          {
            todos.map((todo, i) => {
              return <TodoItem todo={todo} key={i} update={update} />
            })
          }
        </div>

      </main>
    </div>
  )
}
export default App;
