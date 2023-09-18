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
                state.tasks = [...state.tasks, action.payload ];
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
            const task = state.find(task => task.id === action.payload);
            if(task) {
                task.completed = !task.completed;
            }
            return state.tasks;
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id!== action.payload);
            return state.tasks;
        },
    },
});

export const { addTask, toggleTask, removeTask } = tasksSlice.actions;

export const selectTasks = state => state.tasks.tasks;

export default tasksSlice.reducer;