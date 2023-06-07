import { useEffect, useState } from "react";
import { List, TreeComponent } from "../components";
import { StyledGrid, Loader } from "../styles";
import { DragDropContext } from "react-beautiful-dnd";



function Home() {


  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setLoading(false);
    fetch('/api/employees')
      .then(res => res.json())
      .then(data => setEmployees(data.employees))
      .then(() => setLoading(false))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      {loading ? <Loader /> :
        <StyledGrid>
          <List data={employees} />
          <TreeComponent data={employees} id={2} />
        </StyledGrid>
      }
    </>
  );
}

export default Home;