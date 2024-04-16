import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, markAsDone } from "../redux/slices/todoSlice";
import "../todolist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id, task) => {
    dispatch(deleteTodo(id));
    toast.error(`Task "${task}" deleted successfully!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleToggle = (id, isDone, task) => {
    dispatch(markAsDone(id));
    const status = isDone ? " done" : " not done";
    const message = `Task "${task}" marked as ${status}!`;
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="list-container">
      {todos.map((todo) => (
        <div key={todo.id}>
          <p className="task">
            {todo.task}
            <button
              onClick={() => handleToggle(todo.id, todo.isDone, todo.task)}
              className="toggle-btn"
            >
              {todo.isDone ? "Done" : " not Done"}
            </button>
            <FontAwesomeIcon
              onClick={() => handleDelete(todo.id, todo.task)}
              icon={faTrash}
              style={{ color: "red" }}
              className="dlt-btn"
            />
          </p>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};
