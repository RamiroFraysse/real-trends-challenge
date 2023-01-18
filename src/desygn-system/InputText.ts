import styled from '@emotion/styled';

export const InputText = styled.input`
    font-size: 1.25em;
    font-weight: 500;
    border-radius: .4em;
    padding: .8em .7em;
    border: 1px solid #d0d0d0;
    ::placeholder {
        font-size: 1.25em;
        font-weight: 500;
    }
    @media (max-width: 700px) {
        font-size:14px;
        ::placeholder {
            font-size: 14px;
            font-weight: 500;
        }
    }
`;
