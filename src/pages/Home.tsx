// import styled from '@emotion/styled';
import TodoAdd from '../components/TodoAdd';
import TodosList from '../components/TodosList';
import TopBar from '../components/TopBar';
import { Flexbox } from '../desygn-system/Flexbox';

function Home(): JSX.Element {
    return (
        <Flexbox
            width="700px"
            gap="30px"
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

export default Home;
