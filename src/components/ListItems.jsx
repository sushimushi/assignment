import { StyledListItem } from "../styles";
import { Draggable } from "react-beautiful-dnd";
import { getItemStyle } from "../utils/utils";

function ListItems({ data, isDragable, index }) {
    
    return (
        isDragable ?
            <Draggable draggableId={data.id} key={data.id} index={index}>
                {(provided, snapshot) => (
                    <StyledListItem ref={provided.innerRef}{...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                        <div className="listItem__img">
                            <img src={data.img} alt="" />
                        </div>
                        <div className="listItem__data__wrapper">
                            <p className="listItem__name">
                                {data.name}
                            </p>
                            <p className="listItem__data">
                                {data.designation}
                            </p>
                        </div>
                    </StyledListItem>
                )}
            </Draggable>
            :
            <StyledListItem >
                <div className="listItem__img">
                    <img src={data.img} alt="" />
                </div>
                <div className="listItem__data__wrapper">
                    <p className="listItem__name">
                        {data.name}
                    </p>
                    <p className="listItem__data">
                        {data.designation}
                    </p>
                </div>
            </StyledListItem>
    );
}

export default ListItems;