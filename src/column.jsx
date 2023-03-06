import React from "react";
import styled from "styled-components";
import Task from "./task";
import {Droppable} from "react-beautiful-dnd";

const Container = styled.div`
  border-style: ridge;
  border: brown;
  border-width: thick;
  margin: 8px;
`;
const Title = styled.h3``;
const TaskList = styled.div``;
export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided) => (
                        <TaskList
                            innerRef={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {this.props.tasks.map(
                                (task, index) =>
                                    <Task key={task.id} task={task} index={index}/>
                            )}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        );
    }
}
