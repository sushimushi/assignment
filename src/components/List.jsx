import ListItems from "./ListItems";
import { StyledCard, StyledInput } from "../styles";
import { useState } from "react";


function List({ data, id }) {

  const [list, setList] = useState(data);
  const [filter, setFilter] = useState('');

  return (
    <StyledCard>
      <StyledInput placeholder="Search"
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)} />
      {/* {
        list.filter(f => f.includes(filter) || filter === '')
          .map(f => <li key={f}>{f}</li>)
      } */}
      {list.filter(item => {
        if (!filter) return true;
        if (item.name.includes(filter) || item.designation.includes(filter) ||
          item.team.includes(filter) || item.name.toLowerCase().includes(filter) ||
          item.designation.toLowerCase().includes(filter) || item.team.toLowerCase().includes(filter)) {
          return true;
        }
      })
        .map(item => (
          <ListItems data={item} key={item.id}></ListItems>
        ))
      }
    </StyledCard>
  );
}

export default List;