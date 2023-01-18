import TodoAdd from '../../components/TodoAdd';
import { render, screen, fireEvent } from '@testing-library/react';
import { todoToAdd } from '../data/todos';
import store from '../../store/store';

beforeEach(() => {
    render(<TodoAdd />);
});

describe('TodoAdd', () => {
    test('should render the component with an input and disabled button', () => {
        const input = screen.getByPlaceholderText(/Nueva Tarea/i);
        const button = screen.getByRole('button', {
            name: /Agregar/i,
        });
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('disabled');
    });
    test('should add Todo and show it', async () => {
        const input = screen.getByPlaceholderText(/Nueva Tarea/i);
        const button = screen.getByRole('button', {
            name: /Agregar/i,
        });
        fireEvent.change(input, { target: { value: todoToAdd.text } });
        fireEvent.click(button);
        expect(store.todos.length).toBe(1);
        expect(store.todos[0].text).toBe(todoToAdd.text);
    });
});
