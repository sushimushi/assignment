import { StyledCard, StyledGrid, StyledButton } from "../styles";
import { useState, useEffect } from "react";
import List from "./List";
import ListItems from "./ListItems";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getItemStyle, getListStyle, move, reorder } from "../utils/utils";

function TreeComponent({ data }) {
  const [state, setState] = useState([]);
  const [ceo, setCeo] = useState([]);

  useEffect(() => {
    const ceoObj = data.find(item => item.designation === "Chief Executive Officer");
    setCeo(ceoObj);
    const employeeList = data.filter(item => item.designation !== "Chief Executive Officer");

    let managers = employeeList.filter(item => {
      return item.managerId == ceoObj.id;
    });

    managers = managers.map(manager => {
      return {
        ...manager,
        team: data.filter(employee => employee.managerId === manager.id)
      };
    });

    setState(managers);
  }, [data]);

  function onDragEnd(result) {
    const { source, destination } = result;
    // console.log(result);

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    // state[sInd].team[source.index].managerId = state[dInd].id;

    if (sInd === dInd) {
      const items = reorder(state[sInd].team, source.index, destination.index);
      console.log(items);
      const newState = [...state];
      newState[sInd].team = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source.index, destination.index);
      // console.log(state);
      const newState = [...state];
      newState[sInd] = result[0];
      newState[dInd] = result[1];

      setState(newState);
    }
  }


  return (
    <StyledCard>

      <h2>Employee Organization Chart</h2>
      <div className="overflow-auto">
        <div className="ceoBlock">
          {ceo && <ListItems data={ceo} isDragable={false} />}
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <StyledGrid style={{ display: "flex" }} className="managerBlock">
            {state.map((el, ind) => (
              <div key={ind} style={{ 'padding-top': '20px', height: 'auto', overflow: 'visible' }}>
                <div className="managerCell">
                  <ListItems data={el} isDragable={false} />
                </div>
                <Droppable droppableId={`${ind}`}>
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver, el.team.length)}{...provided.droppableProps}>
                      {el.team.map((item, index) => (
                        <ListItems className="team__members" data={item} isDragable={true} key={item.id} index={index} />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </StyledGrid>
        </DragDropContext>
      </div>
    </StyledCard >
  );
}



export default TreeComponent;