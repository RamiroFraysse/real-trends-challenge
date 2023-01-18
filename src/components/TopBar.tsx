import Button from '../desygn-system/Button';
import { TextTitle } from '../desygn-system/Text';
import store from '../store/store';
import { observer } from 'mobx-react';
import { Flexbox } from '../desygn-system/Flexbox';

function TopBar(): JSX.Element {
    return (
        <>
            <TextTitle>Lista de tareas</TextTitle>
            <Flexbox justifyContent="center" gap="1em">
                <Button
                    onClick={() => {
                        store.switchTodoDone();
                    }}
                >
                    {store.hideTodoDone
                        ? 'Mostrar Completadas'
                        : 'Ocultar completadas'}
                </Button>
            </Flexbox>
        </>
    );
}

export default observer(TopBar);
