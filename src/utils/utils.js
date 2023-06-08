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
  let newSourceTeam = Array.from(source.teamMember);
  let newDestinationTeam = Array.from(destination.teamMember);

  const [removed] = newSourceTeam.splice(droppableSource, 1);
  removed.managerId = destination.id;
  removed.team = destination.team;
  newDestinationTeam.splice(droppableDestination, 0, removed);

  const sourceClone = { ...source, teamMember: newSourceTeam };
  const destinationClone = { ...destination, teamMember: newDestinationTeam };

  return [sourceClone, destinationClone];
};


/**
 * Moves an manager to one list to another list.
 */

export const moveManager = (state, source, destination) => {
  const sDropId = source.droppableId;
  const dDropId = destination.droppableId;
  const droppableDestination = destination.index;
  let sourceManagerId = '';
  let sourceManager = {};
  let destinationManagerId = '';
  let destinationManager = {};
  let newSourceManager = {};

  if (sDropId > 1000) {
    sourceManagerId = `${sDropId}`.slice(0, -3);
    sourceManager = state.filter(item => item.id === sourceManagerId)[0];
  }
  if (dDropId > 1000) {
    destinationManagerId = `${dDropId}`.slice(0, -3);
    destinationManager = state.filter(item => item.id === destinationManagerId)[0];
  }


  if (sDropId > 1000 && dDropId > 100) {

    let newSourceManager = {
      designation: destinationManager.designation,
      id: destinationManager.id,
      img: destinationManager.img,
      managerId: destinationManager.managerId,
      name: destinationManager.name,
      team: sourceManager.team,
      teamMember: sourceManager.teamMember
    };

    let newDestinationManager = {
      designation: sourceManager.designation,
      id: sourceManager.id,
      img: sourceManager.img,
      managerId: sourceManager.managerId,
      name: sourceManager.name,
      team: destinationManager.team,
      teamMember: destinationManager.teamMember
    };

    const sourceIndex = state.findIndex(item => item.id === sourceManager.id);
    const destinationIndex = state.findIndex(item => item.id === destinationManager.id);

    const newState = [...state];
    newState[sourceIndex] = newSourceManager;
    newState[destinationIndex] = newDestinationManager;
    return newState;
  }
  if (sDropId > 1000 && dDropId < 100) {
    const newState = [...state];

    let newDestinationManager = state[dDropId];
    let newDestinationTeam = Array.from(state[dDropId].teamMember);
    let newManager = {};

    let newDestinationMember = {
      designation: sourceManager.designation,
      id: sourceManager.id,
      img: sourceManager.img,
      managerId: newDestinationManager.id,
      name: sourceManager.name,
      team: newDestinationManager.team
    };
    newDestinationTeam.splice(droppableDestination, 0, newDestinationMember);

    if (sourceManager.teamMember.length) {
      console.log("here");
      newManager = { ...sourceManager.teamMember[0] };
      newSourceManager = {
        designation: newManager.designation,
        id: newManager.id,
        img: newManager.img,
        managerId: newManager.managerId,
        name: newManager.name,
        team: sourceManager.team,
        teamMember: sourceManager.teamMember
      };
    }

    const sourceIndex = state.findIndex(item => item.id === sourceManager.id);

    newState[sourceIndex] = newSourceManager;
    newState[sourceIndex].teamMember = newState[sourceIndex].teamMember.filter((item, index) => index !== 0);
    newState[dDropId].teamMember = newDestinationTeam;
    console.log(newState);
    return newState;
  }
  if (sDropId < 1000 && dDropId > 100) {
    let newState = [...state];
    const droppableIndex = source.index;
    const destinationIndex = state.findIndex(item => item.id === destinationManager.id);
    let newSourceTeam = Array.from(newState[sDropId].teamMember);

    let [removed] = newSourceTeam.splice(droppableIndex, 1);
    let newDestinationManager = {
      designation: removed.designation,
      id: removed.id,
      img: removed.img,
      managerId: 1,
      name: removed.name,
      team: destinationManager.team,
      teamMember: destinationManager.teamMember
    };
    if (removed.managerId === destinationManager.id) {
      return state;
    }

    let newMember = {
      designation: destinationManager.designation,
      id: destinationManager.id,
      img: destinationManager.img,
      managerId: newDestinationManager.id,
      name: destinationManager.name,
      team: destinationManager.team,
    };

    newState[destinationIndex] = newDestinationManager;
    let newDestinationTeam = Array.from(newState[destinationIndex].teamMember);
    console.log(newDestinationTeam);

    newState[sDropId].teamMember = newSourceTeam;

    newDestinationTeam.splice(0, 0, newMember);
    newState[destinationIndex].teamMember = newDestinationTeam;

    console.log(newState);

    return newState;

  }
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
