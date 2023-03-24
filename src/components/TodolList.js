import React from 'react'
import { useSelector } from 'react-redux'

import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

function TodolList() {
    const todos = useSelector((state) => state.todo.todoList);
    console.log(todos)
    return (
        <div>
            <AddTodo />
            {todos.map((todo) => (<TodoItem todo={todo} />
            ))}
        </div>
    )
}

export default TodolList