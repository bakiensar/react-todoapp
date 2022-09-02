import React from 'react'

const Todo = (props) => {
  const {
    item,
    deleteTodo,
    setIsEdit,
    setWillUpdateTodo,
    setTodoText,
    changeIsDone,
  } = props
  return (
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
  )
}

export default Todo
