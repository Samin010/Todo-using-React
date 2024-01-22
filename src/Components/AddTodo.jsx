import React from "react";
import "./App.css";
import { useState, useRef ,useContext} from "react";
import { MdAdd } from "react-icons/md";
import { TodoItemsContext } from "../Store/TodoItemsStore";
function AddTodo() {
  const nameElement = useRef("");
  const dueDateElement = useRef("");
  const handleOnClick = (e) => {
    e.preventDefault();
    const name = nameElement.current.value;
    const date = dueDateElement.current.value;
    nameElement.current.value = "";
    dueDateElement.current.value = "";
    addItems(name, date);
  };
  const contextObject=useContext(TodoItemsContext)
  const addItems=contextObject.add
  return (
    <div>
      <form onSubmit={handleOnClick}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo here"
              ref={nameElement}
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} />
          </div>
          <div className="col-2">
            <button
              // type="button"
              className="btn btn-success kg-btn"
              // onClick={}
            >
              <MdAdd />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
