import styled from "styled-components";

const StyledGrid = styled.div`
    display:grid;
    grid-template-columns: 300px auto;
    gap: var(--spacing-md);
    & > div{
        min-height: 70rem;
    }
`;

export default StyledGrid;