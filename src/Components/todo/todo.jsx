import { useState } from 'react'
import './todo.css'

function Todo () {
  const [todos, setTodos] = useState([])

  const createTodo = e => {

    if (e.keyCode === 13) {

      const newTodo = {
        id: todos.length + 1,
        title: e.target.value.trim(),
        completed: false,
      }

      setTodos([...todos, newTodo])

      e.target.value = null
    }
  }

  const deleteTodo = (todo) => setTodos(todos.filter(t => t.id !== todo.id))
  
  const completed = ({ id }) => {

    const upDateTodo = todos.map(todo => {

      if (todo.id === id) {

        todo.completed ? todo.completed = false : todo.completed = true

      }
      return todo
    })

    setTodos(upDateTodo)

  }

  return (
    <>
    <h1>Todo React</h1>
      <input type="text" onKeyUp={createTodo} />
      <ul>
        {
          todos.map(todo => {
            return (
              <li key={todo.id} className={todo.completed ? "red" : null}>

                <button className={todo.completed ? "bg-button" : "completed-button"} onClick={completed.bind(null, todo)}>{todo.completed ? "-" : "+"}</button>

                <span className={todo.completed ? "line" : null}>{todo.title}</span>

                <button>edit</button>
                <button className="delete-button" onClick={deleteTodo.bind(null, todo)}>X</button>
              </li>
            )
          })
        }
      </ul>

    </>
  )
}

export default Todo