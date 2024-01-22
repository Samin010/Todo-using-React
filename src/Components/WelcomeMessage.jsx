import React from 'react'
import styles from "./WelcomeMessegae.module.css"
import {useContext} from "react"
import { TodoItemsContext } from '../Store/TodoItemsStore'

function WelcomeMessage() {
const contextObject=useContext(TodoItemsContext)
const todoItems=contextObject.items;
  return (
   
    todoItems.length===0 && <p className={styles.para} >Enjoy your day</p>
  )
}

export default WelcomeMessage
