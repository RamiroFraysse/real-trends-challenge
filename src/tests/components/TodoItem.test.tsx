import { cleanup, render, screen } from '@testing-library/react';
import TodoProvider from '../../context/TodoProvider';
import { todos as todosMock } from '../data/todos';
import userEvent from '@testing-library/user-event';
import TodosList from '../../components/TodosList';

describe('TodoItem', () => {
    afterEach(cleanup);

    beforeEach(() => {
        const wrapper = ({ children }: any) => (
            <TodoProvider initialTodos={todosMock} initialHideTodoDone={false}>
                {children}
            </TodoProvider>
        );

        render(<TodosList />, { wrapper });
    });
    test('should render mock item with text and checkbox', () => {
        const todo = screen.getByText(todosMock[0].text);
        const checkbox = screen.getAllByTestId('checkbox-toggledone')[0];
        expect(checkbox).toHaveAttribute('type', 'checkbox');
        expect(todo).toBeInTheDocument();
    });
    test('should mark todo to done when click checkbox', () => {
        const todoDesc = screen.getAllByTestId('description-todo')[0];
        expect(todoDesc).toBeInTheDocument();
        expect(todoDesc).toHaveAttribute('value', 'false');
        const checkbox = screen.getAllByRole('checkbox')[0];
        expect(checkbox).toBeInTheDocument();
        userEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        expect(todoDesc).toHaveAttribute('value', 'true');
    });
    test('should can edit the todo', () => {
        const todo = screen.getByText(todosMock[0].text);
        userEvent.click(todo);
        const inputEdit = screen.getByDisplayValue(todosMock[0].text);
        userEvent.clear(inputEdit);
        userEvent.type(inputEdit, 'Editado');
        expect(inputEdit).toHaveValue('Editado');

        const button = screen.getByRole('button', {
            name: /Guardar/i,
        });
        expect(button).toBeInTheDocument();
        userEvent.click(button);
        expect(button).not.toBeInTheDocument();
        expect(screen.getByText(/Editado/i));
    });
});
