import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import "./App.css"
import {useContext} from "react"
import { TodoItemsContext } from '../Store/TodoItemsStore';
function TodoItem() {
  // console.log(props)
  const contextObject=useContext(TodoItemsContext)
  const onDeleteClick=contextObject.remove
  const todoItems=contextObject.items
  return (
    <div >
        <div className="row kg-row">
          <div className="col-6">
           {todoItems.name}
          </div>
          <div className="col-4">
            {todoItems.dueDate}
          </div>
          <div className="col-2">
          <button type="button" className="btn btn-danger kg-btn"
          onClick={()=>onDeleteClick(todoItems.name)}
          ><FaDeleteLeft /></button>
          </div>
        </div>
    </div>
  )
}

export default TodoItem
