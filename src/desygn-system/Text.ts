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

export const TextTodoDone = styled.p`
    text-decoration: line-through;
    font-size: 1.25em;
    font-family: arial;
    @media (max-width: 600px) {
        font-size:14px
    }
`;

export const TextTodoUnDone = styled.p`
    color: black;
    font-size: 1.25em;
    font-family: arial;
    @media (max-width: 600px) {
        font-size:14px
    }
`;
