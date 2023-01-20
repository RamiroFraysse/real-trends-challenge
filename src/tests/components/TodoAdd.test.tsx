import TodoAdd from '../../components/TodoAdd';
import { render, screen, fireEvent } from '@testing-library/react';
import { todos as todosMock, todoToAdd } from '../data/todos';
import TodoProvider from '../../context/TodoProvider';

beforeEach(() => {
    render(
        <TodoProvider initialTodos={todosMock}>
            <TodoAdd />
        </TodoProvider>,
    );
});

describe('TodoAdd', () => {
    test('should render the component with an input and disabled button', () => {
        const input = screen.getByPlaceholderText(/Nueva Tarea/i);
        const button = screen.getByRole('button', {
            name: /Agregar/i,
        });
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
    test('should add Todo and show it', async () => {
        const input = screen.getByPlaceholderText(/Nueva Tarea/i);
        const button = screen.getByRole('button', {
            name: /Agregar/i,
        });
        fireEvent.change(input, { target: { value: todoToAdd.text } });
        fireEvent.click(button);
    });
});
