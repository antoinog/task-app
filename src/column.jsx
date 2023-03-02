import React from "react";
import styled from "styled-components";
import Task from "./task";
const Container=styled.div`
border-style: ridge;
  border: brown;
  border-width: thick;
  margin: 8px;
`;
const Title=styled.h3``;
const TaskList=styled.div``;
export default class Column extends  React.Component{
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <TaskList>
                    {this.props.tasks.map(
                        task=><Task key={task.id} task={task} />
                    )}
                </TaskList>
            </Container>
        );
    }
}
