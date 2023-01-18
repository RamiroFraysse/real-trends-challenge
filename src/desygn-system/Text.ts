import styled from '@emotion/styled';

export const TextTitle = styled.h1`
    text-align: center;
    color: black;
    font-family: arial;
    font-size: 2.5rem;
    margin: 2em;
    @media (max-width: 700px) {
        font-size:28px;
        margin:1em;
    }
`;

export const TextTodoDone = styled.p`
    text-decoration: line-through;
    font-size: 1.25em;
    font-family: arial;
    @media (max-width: 700px) {
        font-size:14px
    }
`;

export const TextTodoUnDone = styled.p`
    color: black;
    font-size: 1.25em;
    font-family: arial;
    @media (max-width: 700px) {
        font-size:14px
    }
`;
