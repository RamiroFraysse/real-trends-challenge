import styled from '@emotion/styled';

const StyledButton = styled.button`
    font-size: 1.25rem;
    font-weight: 500;
    border-radius: 0.4em;
    padding: 0.8em 0.7em;
    background: #f0f0f0;
    border: 1px solid #d0d0d0;
    cursor: pointer;
    font-family: arial;
    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

interface Props {
    children: string;
    disabled?: boolean;
    onClick?: () => void;
}

export default function Button({
    children,
    disabled,
    onClick,
}: Props): JSX.Element {
    return (
        <StyledButton onClick={onClick} disabled={disabled}>
            {children}
        </StyledButton>
    );
}
