import Button from '../desygn-system/Button';
import { TextTitle } from '../desygn-system/Text';
import { Flexbox } from '../desygn-system/Flexbox';
import { useTodos } from '../hooks/useTodos';

function TopBar(): JSX.Element {
    const { hideTodoDone, switchTodoDone } = useTodos();

    return (
        <>
            <TextTitle>Lista de tareas</TextTitle>
            <Flexbox justifyContent="center" gap="1em">
                <Button
                    onClick={() => {
                        switchTodoDone(!hideTodoDone);
                    }}
                >
                    {hideTodoDone
                        ? 'Mostrar Completadas'
                        : 'Ocultar completadas'}
                </Button>
            </Flexbox>
        </>
    );
}

export default TopBar;
