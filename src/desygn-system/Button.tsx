import styled from '@emotion/styled';

const StyledButton = styled.button`
    font-size: 20px;
    font-weight: 500;
    border-radius: 8px;
    padding: 16px 14px;
    background: #f0f0f0;
    border: 1px solid #d0d0d0;
    cursor: pointer;
    font-family: arial;
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
