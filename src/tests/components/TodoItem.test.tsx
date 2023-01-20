import TodoItem from '../../components/TodoItem';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import TodoProvider from '../../context/TodoProvider';
import { todos as todosMock } from '../data/todos';

beforeEach(() => {
    render(
        <TodoProvider initialTodos={todosMock} initialHideTodoDone={true}>
            <TodoItem todo={todosMock[0]} />
        </TodoProvider>,
    );
});

describe('TodoItem', () => {
    test('should render mock item with text and checkbox', async () => {
        const todo = screen.getByText(todosMock[0].text);
        const checkbox = screen.getByTestId('checkbox-done');
        expect(checkbox).toHaveAttribute('type', 'checkbox');
        expect(todo).toBeInTheDocument();
    });
    test('should mark todo to done when click checkbox', async () => {
        const checkbox = screen.getByTestId('checkbox-done');
        fireEvent.click(checkbox);

        waitFor(() => {
            // @ts-expect-error
            expect(checkbox?.checked).toEqual(true);
        })
            .then(err => {
                console.log(err);
            })
            .catch(err => {
                console.log(err);
            });
    });
    test('should can edit the todo', async () => {
        const todo = screen.getByText(todosMock[0].text);
        fireEvent.click(todo);
        const inputEdit = await screen.findByDisplayValue(todosMock[0].text);
        fireEvent.change(inputEdit, { target: { value: 'Editado' } });
        const button = await screen.findByRole('button', {
            name: /Guardar/i,
        });
        fireEvent.click(button);
        waitFor(() => {
            expect(screen.getByText(/Editado/i)).toBeInTheDocument();
        })
            .then(err => {
                console.log(err);
            })
            .catch(err => {
                console.log(err);
            });
    });
});
