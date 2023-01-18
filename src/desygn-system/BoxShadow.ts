import styled from '@emotion/styled';

export const BoxShadow = styled.div`
    padding: 2em;
    border-radius: .5em;
    -webkit-box-shadow: 3px -2px 1.5em 3px #acacac;
    -moz-box-shadow: 3px -2px 1.5em 3px #acacac;
    box-shadow: 3px -2px 1.5em 3px #acacac;
    @media (max-width: 700px) {
        padding:1em;
        fontSize:14px;
        border-radius:0;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none; 
    }
`;
