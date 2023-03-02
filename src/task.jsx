import React from "react";
import styled from "styled-components";
const TaskBox=styled.div`
    border: aqua;
  border-style: dashed;
`;
export default class Task extends React.Component{
    render(){
        return <TaskBox>{this.props.task.content}</TaskBox> ;
    }
}
