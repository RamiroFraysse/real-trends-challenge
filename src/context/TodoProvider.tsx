import { Todo, TodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

interface Props {
    children: JSX.Element | JSX.Element[];
    initialTodos?: Todo[];
    initialHideTodoDone?: boolean;
}

function TodoProvider({ children, initialTodos, initialHideTodoDone }: Props) {
    const INITIAL_STATE: TodoState = {
        todos:
            initialTodos ?? JSON.parse(localStorage.getItem('todos') ?? '[]'),
        hideTodoDone:
            initialHideTodoDone ??
            JSON.parse(localStorage.getItem('hideTodoDone') ?? 'false'),
    };
    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const addTodo = (text: string) => {
        if (text !== '') dispatch({ type: 'addTodo', payload: { text } });
    };
    const toggleTodo = (id: number) => {
        dispatch({ type: 'toggleTodo', payload: { id } });
    };
    const updateTodo = (todo: Todo) => {
        dispatch({ type: 'updateTodo', payload: todo });
    };
    const switchTodoDone = (hideTodoDone: boolean) => {
        dispatch({ type: 'swithTodoDone', payload: { hideTodoDone } });
    };

    useEffect(() => {
        localStorage.setItem(
            'hideTodoDone',
            JSON.stringify(todoState.hideTodoDone),
        );
    }, [todoState.hideTodoDone]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoState.todos));
    }, [todoState.todos]);

    return (
        <TodoContext.Provider
            value={{
                addTodo,
                todoState,
                toggleTodo,
                updateTodo,
                switchTodoDone,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;
