import { makeAutoObservable } from "mobx";
import { Todo } from "../interfaces/interfaces";

export const addTodo = (todos: Todo[], text: string): Todo[] => {
  const toReturn = [
    ...todos,
    {
      id: Math.max(0,todos.length),
      text,
      done: false,
    },
  ];
  localStorage.setItem('todos',JSON.stringify(toReturn))
  return toReturn;
};

export const addTodos = (todos: Todo[], newTodos: Todo[]): Todo[] => {
  const toReturn = [
    ...todos,
    ...newTodos,
  ];
  localStorage.setItem('todos',JSON.stringify(toReturn))
  return toReturn;
};

export const updateTodo = (todos: Todo[], newTodo: Todo): Todo[] => {
  todos[newTodo.id] = newTodo
  localStorage.setItem('todos',JSON.stringify(todos))
  return todos;
};

export const toggleTodoDone = (hideTodoDone:boolean): boolean => {
  localStorage.setItem('hideTodoDone',JSON.stringify(hideTodoDone))
  return hideTodoDone;
};

class Store {
  todos: Todo[]= JSON.parse(window.localStorage?.getItem('todos') ?? '[]');
  hideTodoDone:boolean = JSON.parse(window.localStorage?.getItem('hideTodoDone') ?? 'true');
  newTodo: string = "";

  constructor(){
    makeAutoObservable(this)
  } 

  addTodo(): void {
    this.todos = addTodo(this.todos,this.newTodo);
    this.newTodo = "";
  }

  addTodos(newTodos:Todo[]): void {
    this.todos = addTodos(this.todos,newTodos);
  }

  typeTodo(text:string):void{
    this.newTodo= text;
  }

  updateTodo(newTodo:Todo):void {
    this.todos = updateTodo(this.todos,newTodo);
  }

  switchTodoDone():void{
    this.hideTodoDone = toggleTodoDone(!this.hideTodoDone);
  }

}

const store = new Store();
export default store;