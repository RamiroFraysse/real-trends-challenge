import { useRef } from 'react';
import Button from '../desygn-system/Button';
import { Flexbox } from '../desygn-system/Flexbox';
import { InputText } from '../desygn-system/InputText';
import { useTodos } from '../hooks/useTodos';

function TodoAdd(): JSX.Element {
    const inputRef = useRef<any>(null);
    const { addTodo } = useTodos();
    return (
        <Flexbox justifyContent="center" gap="1em">
            <InputText
                test-id="todoAdd-input"
                type="text"
                placeholder="Nueva Tarea"
                ref={inputRef}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        addTodo(inputRef.current.value);
                        inputRef.current.value = '';
                    }
                }}
            />
            <Button
                onClick={() => {
                    addTodo(inputRef.current.value);
                    inputRef.current.value = '';
                }}
            >
                Agregar
            </Button>
        </Flexbox>
    );
}

export default TodoAdd;
