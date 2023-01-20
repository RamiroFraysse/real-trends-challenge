import { Todo } from '../interfaces/interfaces';
import TodoItem from './TodoItem';
import { BoxShadow } from '../desygn-system';
import { useTodos } from '../hooks/useTodos';

function TodosList(): JSX.Element {
    const { todos, hideTodoDone } = useTodos();
    let todosToShow = todos;
    if (hideTodoDone) {
        todosToShow = todos.filter(todo => !todo.done);
    }
    if (todosToShow.length === 0) return <></>;
    return (
        <BoxShadow>
            {todosToShow?.map((todo: Todo) => {
                return <TodoItem todo={todo} key={todo.id} />;
            })}
        </BoxShadow>
    );
}

export default TodosList;
