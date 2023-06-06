import styled from "styled-components";

const StyledGrid = styled.div`
    display:grid;
    grid-template-columns: 300px auto;
    gap: var(--spacing-md);
    max-width: 90vw;
    & > div{
        height: 90vh;
        max-height: 80rem;
        width: fit-content;
        max-width: 100%;
    }
`;

export default StyledGrid;