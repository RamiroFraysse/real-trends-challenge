import { createContext } from 'react';
import { Todo, TodoState } from '../interfaces/interfaces';

export type TodoContextProps = {
    todoState: TodoState;
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    updateTodo: (todo: Todo) => void;
    switchTodoDone: (hideTodoDone: boolean) => void;
};

export const TodoContext = createContext<TodoContextProps>(
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    {} as TodoContextProps,
);
