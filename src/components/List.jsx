import { ListItems, FilterComponent } from "./index";
import { StyledCard, StyledInput } from "../styles";
import { useState, useEffect } from "react";

function List({ data, id, stateChanger, orignalData }) {

  const [list, setList] = useState(data);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setList(data);
  }, [data]);

  useEffect(() => {
    let newList = [];
    if (filter.length) {
      newList = orignalData.filter(item => {
        if (!filter) return true;
        if (item.name.includes(filter) || item.designation.includes(filter) ||
          item.team.includes(filter) || item.name.toLowerCase().includes(filter) ||
          item.designation.toLowerCase().includes(filter) || item.team.toLowerCase().includes(filter)) {
          return true;
        }
      });
    }
    else {
      newList = orignalData;
    }

    setList(newList);
    stateChanger(newList);
  }, [filter]);

  return (
    <StyledCard className="overflow-auto">
      <div>
        <StyledInput placeholder="Search"
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        {/* <FilterComponent data={}/> */}
      </div>
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