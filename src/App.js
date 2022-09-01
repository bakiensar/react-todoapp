import React, { useState } from 'react'

function App() {
  const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [willUpdateTodo, setWillUpdateTodo] = useState('')

  const deleteTodo = (id) => {
    const filteredTodo = todos.filter((item) => item.id !== id)
    setTodos(filteredTodo)
  }

  const changeIsDone = (id) => {
    const searchedTodo = todos.find((item) => item.id === id)

    const updatedTodo = {
      ...searchedTodo,
      isDone: !searchedTodo.isDone,
    }
    const filteredTodo = todos.filter((item) => item.id !== id)
    setTodos([updatedTodo, ...filteredTodo])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (todoText === '') {
      alert("Todo can't be empty")
      return
    }
    const hasTodo = todos.find((item) => item.text === todoText)
    if (hasTodo !== undefined) {
      alert('You have the Todo already')
      return
    }
    if (isEdit === true) {
      const searchedTodo = todos.find((item) => item.id === willUpdateTodo)
      const updatedTodo = {
        ...searchedTodo,
        text: todoText,
      }
      const filteredTodo = todos.filter((item) => item.id !== willUpdateTodo)
      setTodos([updatedTodo, ...filteredTodo])
      setTodoText('')
      setIsEdit(false)
      setWillUpdateTodo('')
    } else {
      const newTodo = {
        id: new Date().getTime(),
        text: todoText,
        isDone: false,
        date: new Date(),
      }
      setTodos([newTodo, ...todos])
      setTodoText('')
    }
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
          <button
            className={`btn btn-${isEdit === true ? 'success' : 'primary'}`}
            type="submit"
          >
            {isEdit === true ? 'SAVE' : 'DONE'}
          </button>
        </div>
      </form>
      {todos.length <= 0 ? (
        <p className="text-center my-5">You don't have any todos yet. </p>
      ) : (
        <React.Fragment>
          {todos.map((item) => (
            <div
              className={`alert alert-${
                item.isDone === true ? 'danger' : 'primary'
              } d-flex justify-content-between`}
            >
              <p className="my-auto">{item.text}</p>
              <div>
                <button
                  onClick={() => deleteTodo(item.id)}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setIsEdit(true)
                    setWillUpdateTodo(item.id)
                    setTodoText(item.text)
                  }}
                  className="btn btn-success btn-sm mx-1 "
                >
                  Edit
                </button>
                <button
                  onClick={() => changeIsDone(item.id)}
                  className="btn btn-sm btn-secondary"
                >
                  {item.isDone === false ? 'DONE' : 'UNDONE'}
                </button>
              </div>
            </div>
          ))}
        </React.Fragment>
      )}
    </div>
  )
}

export default App
