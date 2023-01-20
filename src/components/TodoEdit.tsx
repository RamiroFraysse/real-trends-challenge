import { useState } from 'react';
import { Button, Flexbox, InputText } from '../desygn-system';
import { Todo } from '../interfaces/interfaces';

interface Props {
    todo: Todo;
    onSaveEditTodo: (todo: Todo) => void;
}

function TodoEdit({ todo, onSaveEditTodo }: Props): JSX.Element {
    const [textToEdit, setTextToEdit] = useState(todo.text);

    return (
        <Flexbox justifyContent="center" gap="1em">
            <InputText
                type="text"
                placeholder="Nueva Tarea"
                onChange={evt => {
                    setTextToEdit(evt.target.value);
                }}
                value={textToEdit}
            />
            <Button
                onClick={() => {
                    onSaveEditTodo({ ...todo, text: textToEdit });
                }}
            >
                Guardar
            </Button>
        </Flexbox>
    );
}

export default TodoEdit;
