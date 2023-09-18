import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    tasks: []
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(text) {
                return {
                    payload: {
                        id: nanoid(),
                        text,
                        completed: false,
                    },
                };
            },
        },
        toggleTask: (state, action) => {
            const task =
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id!== action.payload);
        },
    },
});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;

export const selectTasks = state => state.tasks.tasks;

export default tasksSlice.reducer;