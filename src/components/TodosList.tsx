import store from '../store/store';
import { observer } from 'mobx-react';
import { Todo } from '../interfaces/interfaces';
import TodoItem from './TodoItem';
import { BoxShadow } from '../desygn-system/BoxShadow';

function TodosList(): JSX.Element {
    let todosToShow = store.todos;
    if (store.hideTodoDone) {
        todosToShow = store.todos.filter(todo => !todo.done);
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

export default observer(TodosList);
