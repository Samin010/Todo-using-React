import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItem from "./Components/TodoItem";
import TodoItemsContainer from "./Components/TodoItemsContainer";
import {useState} from "react"
import WelcomeMessage from "./Components/WelcomeMessage";
import { TodoItemsContext } from "./Store/TodoItemsStore";
// import "./App.css"
function App() {
 
  const [listItems,setListItems]=useState([])

  const addItem=(itemName,itemDate)=>{
    // console.log(itemName,itemDate)
    setListItems((currVal)=>[...currVal,{
      name:itemName,
      dueDate:itemDate
    }])
  }

  const removeItem=(itemName)=>{
    // console.log(itemName)
    const newListItems=listItems.filter((item)=>item.name!==itemName)
    setListItems(newListItems)
  }
  
  return (
    <TodoItemsContext.Provider value={{
      items:listItems,
      add:addItem,
      remove:removeItem
    }}>
    <center className="todo-container">
      <AppName/>
      <AddTodo />
      <WelcomeMessage />
      <TodoItemsContainer/>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
