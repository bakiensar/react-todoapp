import React, { useState } from 'react'

function App() {
  const [todoText, setTodoText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (todoText === '') {
      alert("Todo can't be empty")
      return
    }
  }

  return (
    <div className="container my-5">
      <h1 className="text-center">TODO APP</h1>
      <form onSubmit={handleSubmit}>
        <div class="input-group mb-3">
          <input
            value={todoText}
            type="text"
            class="form-control"
            placeholder="Add Todo"
            onChange={(event) => setTodoText(event.target.value)}
          />
          <button class="btn btn-primary" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
