import { Todo } from '../interfaces/interfaces';
import { useState } from 'react';
import TodoEdit from './TodoEdit';
import { TextTodoDone, TextTodoUnDone } from '../desygn-system/Text';
import { Checkbox } from '../desygn-system/Checkbox';
import { Flexbox } from '../desygn-system/Flexbox';
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
                    data-testid="checkbox-done"
                    checked={todo.done}
                    onChange={(evt): void => {
                        toggleTodo(todo.id);
                    }}
                />
                {todo.done ? (
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

export default TodoItem;
