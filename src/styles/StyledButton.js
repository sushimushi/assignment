import styled from "styled-components";

const StyledButton = styled.a`
    padding: 1rem;
    border:none;
    border-radius: var(--border-radius-subtle);
    font-weight: 500;
    color: var(--light-green);
    cursor: pointer;

    &:hover{
    color: var(--green);
    }
`;

export default StyledButton;