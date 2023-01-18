import styled from '@emotion/styled';

type FlexboxProps = {
    justifyContent?: string;
    flexDirection?: string;
    gap?: string;
    margin?: string;
    width?: string;
};

export const Flexbox = styled.div`
    overflow:hidden;
    display: flex;
    gap: ${(props: FlexboxProps) => props.gap};
    justify-content: ${(props: FlexboxProps) => props.justifyContent};
    flex-direction: ${(props: FlexboxProps) => props.flexDirection};
    margin: ${(props: FlexboxProps) => props.margin};
    width: ${(props: FlexboxProps) => props.width};
    @media (max-width: 700px) {
        width:100%;
    }
`;
