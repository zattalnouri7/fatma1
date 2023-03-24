import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addtask } from '../redux/slice/TodoSlice'

function AddTodo() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    id: Math.random(),
    title: "",
    description: "",
    isDone: false,
  })
  return (
    <div className='add-task'>
      <input type='texte' placeholder='enter task title' onChange={(e) => { setTask({ ...task, title: e.target.value }) }} />
      <input type='texte' placeholder='enter task title' onChange={(e) => { setTask({ ...task, description: e.target.value }) }} />
      <button onClick={() => dispatch(addtask(task))}>
        add new task</button>

    </div>

  )
}

export default AddTodo