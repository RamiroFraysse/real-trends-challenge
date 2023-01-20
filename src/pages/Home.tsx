import { observer } from 'mobx-react';
import TodoAdd from '../components/TodoAdd';
// import TodoAdd from '../components/TodoAdd';
import TodosList from '../components/TodosList';
import TopBar from '../components/TopBar';
import TodoProvider from '../context/TodoProvider';
import { Flexbox } from '../desygn-system/Flexbox';

function Home(): JSX.Element {
    return (
        <Flexbox
            width="700px"
            gap="1.875em"
            margin="auto"
            justifyContent="center"
            flexDirection="column"
        >
            <TodoProvider>
                <TopBar />
                <TodoAdd />
                <TodosList />
            </TodoProvider>
        </Flexbox>
    );
}

export default observer(Home);
