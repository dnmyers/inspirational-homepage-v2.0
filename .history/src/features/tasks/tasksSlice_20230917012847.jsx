import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: []
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id!== action.payload);
        },
        toggleTask: (state, action) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === action.payload) {
                    return {...task, completed:!task.completed };
                }
                return task;
            });
        }
    },
})