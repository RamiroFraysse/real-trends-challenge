import styled from '@emotion/styled';

export const TextTitle = styled.h1`
    text-align: center;
    color: black;
    font-family: arial;
    font-size: 2.5rem;
    marginTop: 1em;
    @media (max-width: 600px) {
        font-size:28px;
        marginTop:1em;
    }
`;

type TextTodoProps = {
    done: boolean;
    value: boolean;
};

export const TextTodo = styled.p`
    text-decoration: ${(props: TextTodoProps) => props.done ? 'line-through' : 'none'};
    font-size: 1.25em;
    font-family: arial;
    @media (max-width: 600px) {
        font-size:14px
    }
`;


