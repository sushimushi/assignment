import styled from "styled-components";

const StyledListItem = styled.div`
    background-color: var(--dark-grey);
    display: grid;
    grid-template-columns: auto 1fr;
    border-radius: var(--border-radius-subtle);
    cursor: pointer;
    margin-bottom: 1rem;
    &:hover{
        background: var(--grey);
    }

    .listItem__img{
        width: 7rem;
        margin: 1rem;
        aspect-ratio: 1;
        cursor: pointer;
        box-shadow: 0 1rem 3rem 1rem rgba(0,0,0,0.3);
        img{
            border-radius: var(--border-radius-subtle);
        }
    }

    .listItem__data__wrapper{
        margin-block:1rem;
        cursor: pointer;

        .listItem__name{
            font-size: var(--fs-md);
            font-weight: 500;
        }
        .listItem__data{
            font-size: var(--fs-xxs);
            color:var(--light-grey);
        }
    }
`;

export default StyledListItem;