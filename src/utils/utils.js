import { useState } from "react";

// fake data generator;
export const getItems = (count, offset = 0) => {

  const list = [{
    id: 1,
    name: "Mark Hill",
    designation: "Chief Executive Officer",
    team: "",
    managerId: "",
    img: '/src/assets/001.png'
  },
  {
    id: 2,
    name: "Joe Linux",
    designation: "Chief Business Officer",
    team: "Database",
    managerId: "102",
    img: '/src/assets/002.png'
  },
  {
    id: 3,
    name: "Linda May",
    designation: "Chief Technology Officer",
    team: "Branch",
    managerId: "",
    img: '/src/assets/003.png'
  }];

  return list.map((item, k) => ({
    ...item,
    id: `item-${k + offset}-${new Date().getTime()}`,
  }));

};


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
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
const grid = 8;


export const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});


export const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});


export const dummyList = [{
  id: 1,
  name: "Mark Hill",
  designation: "Chief Executive Officer",
  team: "",
  managerId: "",
  img: '/src/assets/001.png'
},
{
  id: 2,
  name: "Joe Linux",
  designation: "Chief Business Officer",
  team: "Database",
  managerId: "102",
  img: '/src/assets/002.png'
},
{
  id: 3,
  name: "Linda May",
  designation: "Chief Technology Officer",
  team: "Branch",
  managerId: "",
  img: '/src/assets/003.png'
}];