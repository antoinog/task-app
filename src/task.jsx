import React from "react";
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";

const TaskBox = styled.div`
  border: aqua;
  border-style: dashed;
`;
export default class Task extends React.Component {
    render() {
        return (
            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
            >
                {(provided) => (
                    <TaskBox
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                    >
                        {this.props.task.content}</TaskBox>
                )
                }

            </Draggable>
        );
    }
}
