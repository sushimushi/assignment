export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


/**
 * Moves an item from one list to another list.
 */
export const move = (source, destination, droppableSource, droppableDestination) => {

  let newSourceTeam = Array.from(source.team);
  let newDestinationTeam = Array.from(destination.team);

  const [removed] = newSourceTeam.splice(droppableSource, 1);
  removed.managerId = destination.id;
  newDestinationTeam.splice(droppableDestination, 0, removed);

  const sourceClone = { ...source, team: newSourceTeam };
  const destinationClone = { ...destination, team: newDestinationTeam };

  return [sourceClone, destinationClone];
};


export const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",

  // change background colour if dragging
  background: isDragging ? "var(--grey)" : "var(--dark-grey)",
  cursor: 'grab',

  // styles we need to apply on draggables
  ...draggableStyle
});


export const getListStyle = (isDraggingOver, isTeam) => ({
  // background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: "10px",
  border: '2px solid',
  height: isTeam ? 'auto' : '130px',
  'borderRadius': 'var(--border-radius-subtle)',
  'borderColor': isDraggingOver ? 'var(--light-grey)' : 'var(--grey)',
  width: '250px',
  'margin-top': '20px'
});
