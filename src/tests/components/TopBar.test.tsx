import TopBar from '../../components/TopBar';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoProvider from '../../context/TodoProvider';

beforeEach(() => {
    render(
        <TodoProvider initialHideTodoDone={true}>
            <TopBar />
        </TodoProvider>,
    );
});

describe('TopBar', () => {
    test('should render the component with the static title and toggle button', () => {
        const title = screen.getByText('Lista de tareas');
        const button = screen.getByRole('button', {
            name: /Mostrar Completadas/i,
        });
        expect(title).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
    test('should toggle title button when click in to it', () => {
        const button = screen.getByRole('button', {
            name: /Mostrar Completadas/i,
        });
        expect(button).toBeInTheDocument();
        fireEvent.click(button, { target: { value: /Ocultar Completadas/i } });
    });
});
