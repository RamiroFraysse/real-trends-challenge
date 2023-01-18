import { observer } from 'mobx-react';
import Button from '../desygn-system/Button';
import { Flexbox } from '../desygn-system/Flexbox';
import { InputText } from '../desygn-system/InputText';
import useTodo from '../hooks/useTodo';
import store from '../store/store';

function TodoAdd(): JSX.Element {
    const { handleChange, handleSave } = useTodo();
    return (
        <Flexbox justifyContent="center" gap="1em">
            <InputText
                test-id="todoAdd-input"
                type="text"
                placeholder="Nueva Tarea"
                onChange={handleChange}
                onKeyDown={e => {
                    if (e.key === 'Enter') handleSave();
                }}
                value={store.newTodo}
            />
            <Button onClick={handleSave} disabled={store.newTodo === ''}>
                Agregar
            </Button>
        </Flexbox>
    );
}

export default observer(TodoAdd);
