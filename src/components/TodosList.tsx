import store from '../store/store';
import { observer } from 'mobx-react';
import { Todo } from '../interfaces/interfaces';
import TodoItem from './TodoItem';
import { BoxShadow } from '../desygn-system/BoxShadow';

function TodosList(): JSX.Element {
    if (store.hideTodoDone)
        return (
            <BoxShadow>
                {store.todos
                    .filter(todo => !todo.done)
                    .map((todo: Todo) => {
                        return <TodoItem todo={todo} key={todo.id} />;
                    })}
            </BoxShadow>
        );

    return (
        <BoxShadow>
            {store.todos?.map((todo: Todo) => {
                return <TodoItem todo={todo} key={todo.id} />;
            })}
        </BoxShadow>
    );
}

export default observer(TodosList);
