import { StyledCard, StyledGrid } from "../styles";
import { useState } from "react";
import List from "./List";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getItems, getItemStyle, getListStyle, move, reorder, dummyList } from "../utils/utils";
import ListItems from "./ListItems";

function TreeComponent() {
  const [state, setState] = useState([getItems()]);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter(group => group.length));
    }
  }
  return (
    <StyledCard>
      {/* <button type="button" onClick={() => { setState([...state, []]); }}>
          Add new group
        </button> */}
      <DragDropContext onDragEnd={onDragEnd}>
        <StyledGrid style={{ display: "flex" }}>
          {state.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}{...provided.droppableProps}>
                  {el.map((item, index) => (
                    <ListItems data={item} isDragable={true} key={item.id} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </StyledGrid>
      </DragDropContext>
    </StyledCard>
  );
}



export default TreeComponent;