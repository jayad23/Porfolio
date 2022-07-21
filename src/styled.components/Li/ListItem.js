import React from 'react'
import styled from "styled-components"
const Li = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    list-style: none;

`
const ListItem = ({ name, Icon}) => {
  return (
    <Li>
        <Icon />
        <span style={{ fontSize: "10px"}}>{name}</span>
    </Li>
  )
}

export default ListItem