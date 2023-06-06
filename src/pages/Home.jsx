import { useEffect, useState } from "react";
import { List, TreeComponent } from "../components";
import { StyledGrid } from "../styles";
import { DragDropContext } from "react-beautiful-dnd";



function Home() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('/api/employees')
      .then(res => res.json())
      .then(data => setEmployees(data.employees))
      .catch(err => console.error(err));
  }, []);

  return (
    <StyledGrid>
      <List data={employees} />
      <TreeComponent data={employees} id={2} />
    </StyledGrid>
  );
}

export default Home;