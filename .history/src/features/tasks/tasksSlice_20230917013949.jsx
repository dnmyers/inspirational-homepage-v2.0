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
            }
        },
        removeTask: (state, action) => {
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
});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;

export const selectTasks = state => state.tasks.tasks;

export default tasksSlice.reducer;