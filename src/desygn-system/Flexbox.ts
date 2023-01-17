import styled from '@emotion/styled';

type FlexboxProps = {
    justifyContent?: string;
    flexDirection?: string;
    gap?: string;
    margin?: string;
    width?: string;
};

export const Flexbox = styled.div`
    display: flex;
    gap: ${(props: FlexboxProps) => props.gap};
    justify-content: ${(props: FlexboxProps) => props.justifyContent};
    flex-direction: ${(props: FlexboxProps) => props.flexDirection};
    margin: ${(props: FlexboxProps) => props.margin};
    width: ${(props: FlexboxProps) => props.width};
`;
