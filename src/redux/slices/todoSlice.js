import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: "1", task: "react assignment", isDone: false },
    { id: "2", task: "cricket", isDone: false },
    { id: "3", task: "sleep", isDone: false },
    { id: "4", task: "Run", isDone: false }
    ],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload.task,
                isDone: false,
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: true };
                }
                return todo;
            });
        },
    },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
