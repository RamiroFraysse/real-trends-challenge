import { Todo } from '../interfaces/interfaces';
import store from '../store/store';

function useTodo() {
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        store.typeTodo(evt.target.value);
    };

    const handleSave = (): void => {
        store.addTodo();
    };

    const handleChangeEditTodo = (todo: Todo): void => {
        store.updateTodo(todo);
    };
    const handleSaveEditTodo = (todo: Todo): void => {
        store.updateTodo(todo);
    };
    return {
        handleChange,
        handleSave,
        handleChangeEditTodo,
        handleSaveEditTodo,
    };
}

export default useTodo;
