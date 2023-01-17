import { Todo } from '../interfaces/interfaces';
import { observer } from 'mobx-react';
import store from '../store/store';
import { useState } from 'react';
import TodoEdit from './TodoEdit';
import useTodo from '../hooks/useTodo';
import { TextTodoDone, TextTodoUnDone } from '../desygn-system/Text';
import { Checkbox } from '../desygn-system/Checkbox';
import { Flexbox } from '../desygn-system/Flexbox';

interface Props {
    todo: Todo;
    key: number;
}

function TodoItem({ todo, key = todo.id }: Props): JSX.Element {
    const { text } = todo;
    const [editTodo, setEditTodo] = useState(false);

    const { handleSaveEditTodo } = useTodo();

    const handleSave = (todo: Todo): void => {
        handleSaveEditTodo(todo);
        setEditTodo(!editTodo);
    };

    return (
        <>
            <Flexbox key={key} gap="1em">
                <Checkbox
                    type="checkbox"
                    checked={store.todos[todo.id].done}
                    onChange={(evt): void => {
                        store.updateTodo({ ...todo, done: !todo.done });
                    }}
                />
                {store.todos[todo.id].done ? (
                    <TextTodoDone
                        onClick={() => {
                            setEditTodo(!editTodo);
                        }}
                    >
                        {text}
                    </TextTodoDone>
                ) : (
                    <TextTodoUnDone
                        onClick={() => {
                            setEditTodo(!editTodo);
                        }}
                    >
                        {text}
                    </TextTodoUnDone>
                )}
            </Flexbox>
            <div>
                {editTodo && (
                    <TodoEdit todo={todo} onSaveEditTodo={handleSave} />
                )}
            </div>
        </>
    );
}

export default observer(TodoItem);
