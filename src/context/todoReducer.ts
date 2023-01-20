import { TodoState, Todo } from '../interfaces/interfaces';

type TodoAction = 
    | { type: 'addTodo', payload: {text:string} }
    | { type: 'toggleTodo', payload: { id: number } }
    | { type: 'updateTodo', payload: Todo }
    | { type: 'swithTodoDone', payload: {hideTodoDone:boolean} }


export const todoReducer = ( state: TodoState, action: TodoAction ): TodoState => {

    switch ( action.type ) {
        case 'addTodo':{
            return {
                ...state,
                todos: [ ...state.todos, {
                    id:Number(state.todos.length),
                    text:action.payload.text,
                    done:false
                }] 
            }
        }
            
        case 'toggleTodo':
            return {
                ...state,
                todos: state.todos.map(({...todo})=>{
                  if(todo.id===action.payload.id)
                    todo.done = !todo.done;
                  return todo;
                })
            }
        case 'updateTodo':
            state.todos[action.payload.id] = action.payload
            return {
                ...state,
                todos:state.todos,
            }
        case 'swithTodoDone':
            return {
                ...state,
                hideTodoDone:action.payload.hideTodoDone,
            }
            
        default:
            return state;
    }

}