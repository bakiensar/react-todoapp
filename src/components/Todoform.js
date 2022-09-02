import React from 'react'

const Todoform = (props) => {
  const { handleSubmit, todoText, setTodoText, isEdit } = props
  return (
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
  )
}

export default Todoform
