import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [{
        id: Math.random(),
        title: "todo item 1",
        description: "describe todo item 1",
        isDone: false,
    },
    {
        id: Math.random(),
        title: "todo item 2",
        description: "describe todo item 2",
        isDone: false,
    },
    {
        id: Math.random(),
        title: "todo item 3",
        description: "describe todo item 3",
        isDone: true,
    },

    ]
}
export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtask: (state, action) => {
            state.todoList.push(action.payload);
        },
        removetask: (state, action) => {
            state.todoList = state.todoList.filter((el) => el.id !== action.payload.id);
        },
        donetask: (state, action) => {
            let i = state.todoList.findIndex((el => el.id === action.payload.id));
            state.todoList[i] = {
                ...state.todoList[i],
                isDone: !state.todoList[i].isDone,
            }
        },
        Edittask: (state, action) => {
            let i = state.todoList.findIndex((el => el.id === action.payload.id));
            state.todoList[i] = {
                ...state.todoList[i],
                title: action.payload.task.title,
                description: action.payload.task.description,
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addtask, removetask, donetask, Edittask } = TodoSlice.actions;

export default TodoSlice.reducer;