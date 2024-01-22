import React from 'react'
import TodoItem from './TodoItem'
import {useContext} from "react"
import { TodoItemsContext } from '../Store/TodoItemsStore'
function TodoItemsContainer() {

  const contextObject=useContext(TodoItemsContext)
  const todoItems=contextObject.items;
  return (
    <div>
      {todoItems.map((e)=>{
        return <TodoItem 
        key={e.name} 
        name={e.name} 
        date={e.dueDate}
    />
      })}
    </div>
  )
}

export default TodoItemsContainer
