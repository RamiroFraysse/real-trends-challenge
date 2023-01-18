import { observer } from 'mobx-react';
import TodoAdd from '../components/TodoAdd';
import TodosList from '../components/TodosList';
import TopBar from '../components/TopBar';
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
            <TopBar />
            <TodoAdd />
            <TodosList />
        </Flexbox>
    );
}

export default observer(Home);
