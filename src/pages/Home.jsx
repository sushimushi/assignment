import { useState } from "react";
import { List, TreeComponent } from "../components";
import { StyledGrid } from "../styles";
import { DragDropContext } from "react-beautiful-dnd";
import { dummyList } from "../utils/utils";



function Home() {

  const [employeeTree, setEmployeeTree] = useState([]);

  return (
    <StyledGrid>
      <List data={dummyList} />
      <TreeComponent data={dummyList} id={2} />
    </StyledGrid>
  );
}

export default Home;