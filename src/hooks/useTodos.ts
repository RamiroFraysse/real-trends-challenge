import { TodoContext } from '../context/TodoContext';
import { useContext } from 'react';
export const useTodos = () => {
 
  const {addTodo,switchTodoDone,todoState,toggleTodo,updateTodo} = useContext(TodoContext);
  const {todos,hideTodoDone} = todoState;  

  return{
    todos,
    addTodo,
    toggleTodo,
    updateTodo,
    switchTodoDone,
    hideTodoDone,
  }
}