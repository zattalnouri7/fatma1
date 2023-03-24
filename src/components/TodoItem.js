import React from 'react'
import { useDispatch } from 'react-redux'
import { donetask, Edittask, removetask } from '../redux/slice/TodoSlice'
import EditTask from './EditTask'

function TodoItem({ todo }) {
  const dispatch = useDispatch()
  return (
    <div className={`todo-item ${todo.isDone ? 'done' : 'undone'}`}>
      <div className='text'>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
      </div>
      <span onClick={() => dispatch(donetask({ id: todo.id }))}>{todo.isDone ? 'done' : 'not Done'}
      </span>
      <EditTask todo={todo} />
      <button onClick={() => dispatch(removetask({ id: todo.id }))}>remove</button>
    </div >
  )
}

export default TodoItem