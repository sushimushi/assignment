import styled from "styled-components";

const StyledGrid = styled.div`
    display:grid;
    grid-template-columns: 300px auto;
    gap: var(--spacing-md);
    & > div{
        height: 90vh;
        max-height: 80rem;
        width: fit-content;
        max-width: 1000px;
        overflow: auto;
    }
`;

export default StyledGrid;