import React, { useState } from 'react'

function App() {
  const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (todoText === '') {
      alert("Todo can't be empty")
      return
    }
    console.log(todoText)
  }

  return (
    <div className="container my-5">
      <h1 className="text-center">TODO APP</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            value={todoText}
            type="text"
            className="form-control"
            placeholder="Add Todo"
            onChange={(event) => setTodoText(event.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            ADD
          </button>
        </div>
      </form>
      {todos.length <= 0 ? (
        <p className="text-center my-5">You don't have any todos yet. </p>
      ) : (
        <div>
          <p>Todo will be listed</p>
        </div>
      )}
    </div>
  )
}

export default App
