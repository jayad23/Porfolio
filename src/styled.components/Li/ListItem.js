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
        <li style={{ fontSize: "10px"}}>{name}</li>
    </Li>
  )
}

export default ListItem