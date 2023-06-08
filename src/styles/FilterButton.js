import styled from "styled-components";

const FilterButton = styled.div`

  .button{
    padding: 5px;
    position: relative;
  }

  .teamList{
    background-color: var(--dark-grey);
    position: absolute;
    padding: 10px;
    border-radius: var(--border-radius-subtle);
    box-shadow:0px 3px 15px rgba(0,0,0,0.2);

    div {
        padding: 3px;
        cursor: pointer;
        &:hover{
            color: var(--light-green);
        }
    }
  }
`;

export default FilterButton;