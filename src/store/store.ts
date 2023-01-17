import { makeAutoObservable } from "mobx";
import { Todo } from "../interfaces/interfaces";



export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0,todos.length),
    text,
    done: false,
  },
];

export const updateTodo = (todos: Todo[], newTodo: Todo): Todo[] => {
  todos[newTodo.id] = newTodo
  return todos;
};

class Store {
  todos: Todo[]=[];
  hideTodoDone:boolean = true;
  newTodo: string = "";

  constructor(){
    makeAutoObservable(this)
  } 

  addTodo(): void {
    this.todos = addTodo(this.todos,this.newTodo);
    this.newTodo = "";
  }

  updateTodo(newTodo:Todo):void {
    this.todos = updateTodo(this.todos,newTodo);
  }

  switchTodoDone():void{
    console.log(this.hideTodoDone)
    this.hideTodoDone = !this.hideTodoDone;
  }

}

const store = new Store();
export default store;