import TodoItem from '../../components/TodoItem';
import { fireEvent, render, screen } from '@testing-library/react';
import { todos } from '../data/todos';
import store from '../../store/store';

beforeEach(() => {
    store.addTodos(todos);
    render(<TodoItem todo={todos[0]} />);
});

describe('TodoItem', () => {
    test('should render mock item with text and checkbox', async () => {
        const todo = screen.getByText(todos[0].text);
        const checkbox = screen.getByTestId('checkbox-done');
        expect(checkbox).toHaveAttribute('type', 'checkbox');
        expect(todo).toBeInTheDocument();
    });
    test('should mark todo to done when click checkbox', async () => {
        const checkbox = screen.getByTestId('checkbox-done');
        fireEvent.click(checkbox);
        expect(store.todos[0].done).toBe(true);
    });
    test('should can edit the todo', async () => {
        const todo = screen.getByText(todos[0].text);
        fireEvent.click(todo);
        const inputEdit = await screen.findByDisplayValue(todos[0].text);
        fireEvent.change(inputEdit, { target: { value: 'Editado' } });
        const button = await screen.findByRole('button', {
            name: /Guardar/i,
        });
        fireEvent.click(button);
        expect(store.todos[0].text).toBe('Editado');
    });
});
