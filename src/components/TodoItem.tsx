import { Todo } from '../interfaces/interfaces';
import { useState } from 'react';
import TodoEdit from './TodoEdit';
import { Checkbox, Flexbox, TextTodo } from '../desygn-system';
import { useTodos } from '../hooks/useTodos';

interface Props {
    todo: Todo;
    key?: number;
}

function TodoItem({ todo }: Props): JSX.Element {
    const { toggleTodo, updateTodo } = useTodos();
    const { text } = todo;
    const [editTodo, setEditTodo] = useState(false);

    const handleSave = (todo: Todo): void => {
        updateTodo(todo);
        setEditTodo(!editTodo);
    };

    return (
        <>
            <Flexbox key={todo.id} gap="1em">
                <Checkbox
                    type="checkbox"
                    data-testid="checkbox-toggledone"
                    checked={todo.done}
                    onChange={(evt): void => {
                        toggleTodo(todo.id);
                    }}
                />
                <TextTodo
                    done={todo.done}
                    value={todo.done}
                    data-testid="description-todo"
                    onClick={() => {
                        setEditTodo(!editTodo);
                    }}
                >
                    {text}
                </TextTodo>
            </Flexbox>
            <div>
                {editTodo && (
                    <TodoEdit todo={todo} onSaveEditTodo={handleSave} />
                )}
            </div>
        </>
    );
}

export default TodoItem;
