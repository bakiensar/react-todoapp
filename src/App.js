import React, { useState, useEffect } from 'react'
import Todo from './components/Todo'
import Todoform from './components/Todoform'

function App() {
  const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [willUpdateTodo, setWillUpdateTodo] = useState('')

  useEffect(() => {
    const todosFromLocalStorage = localStorage.getItem('todos')

    if (todosFromLocalStorage === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      setTodos(JSON.parse(todosFromLocalStorage))
    }
  }, [])

  const deleteTodo = (id) => {
    const filteredTodo = todos.filter((item) => item.id !== id)
    setTodos(filteredTodo)
    localStorage.setItem('todos', JSON.stringify(filteredTodo))
  }

  const changeIsDone = (id) => {
    const searchedTodo = todos.find((item) => item.id === id)

    const updatedTodo = {
      ...searchedTodo,
      isDone: !searchedTodo.isDone,
    }
    const filteredTodo = todos.filter((item) => item.id !== id)
    setTodos([updatedTodo, ...filteredTodo])
    localStorage.setItem(
      'todos',
      JSON.stringify([updatedTodo, ...filteredTodo]),
    )
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
      localStorage.setItem(
        'todos',
        JSON.stringify([updatedTodo, ...filteredTodo]),
      )
    } else {
      const newTodo = {
        id: new Date().getTime(),
        text: todoText,
        isDone: false,
        date: new Date(),
      }
      setTodos([newTodo, ...todos])
      setTodoText('')
      localStorage.setItem('todos', JSON.stringify([newTodo, ...todos]))
    }
  }

  return (
    <div className="container my-5">
      <h1 className="text-center">TODO APP</h1>
      <Todoform
        handleSubmit={handleSubmit}
        todoText={todoText}
        setTodoText={setTodoText}
        isEdit={isEdit}
      />
      {todos.length <= 0 ? (
        <p className="text-center my-5">You don't have any todos yet. </p>
      ) : (
        <React.Fragment>
          {todos.map((item) => (
            <Todo
              item={item}
              deleteTodo={deleteTodo}
              setIsEdit={setIsEdit}
              setWillUpdateTodo={setWillUpdateTodo}
              setTodoText={setTodoText}
              changeIsDone={changeIsDone}
            />
          ))}
        </React.Fragment>
      )}
    </div>
  )
}

export default App
